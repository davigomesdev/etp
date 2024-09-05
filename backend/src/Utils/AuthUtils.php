<?php

namespace Src\Utils;

use DateTimeImmutable;
use Lcobucci\JWT\Encoding\ChainedFormatter;
use Lcobucci\JWT\Encoding\JoseEncoder;
use Lcobucci\JWT\Signer\Hmac\Sha256;
use Lcobucci\JWT\Signer\Key\InMemory;
use Lcobucci\JWT\Token\Builder;
use Lcobucci\JWT\Token\Parser;
use Lcobucci\JWT\Validation\Constraint\RelatedTo;
use Lcobucci\JWT\Validation\Validator;
use Src\Core\Exceptions\UnauthorizedException;
use Src\Modules\Admin\AdminService;
use Src\Modules\Customer\CustomerService;

class AuthUtils
{
    public static function generateToken(array $data, string $secret, string $expire): string
    {
        $algorithm = new Sha256();
        $signingKey = InMemory::base64Encoded($secret);

        $now = new DateTimeImmutable();
        $tokenBuilder = (new Builder(new JoseEncoder(), ChainedFormatter::default()));

        $token = $tokenBuilder
            ->issuedBy($_ENV['BASE_URL'])
            ->permittedFor($_ENV['ORIGIN_URL'])
            ->issuedAt($now)
            ->expiresAt($now->modify('+' . $expire))
            ->relatedTo((string)$data['id'])
            ->getToken($algorithm, $signingKey);

        return $token->toString();
    }

    public static function verifyAdminToken(string $authorizationHeader): void
    {
        if (empty($authorizationHeader)) {
            throw new UnauthorizedException();
        }

        $token = self::parseBearerToken($authorizationHeader);
        $parser = new Parser(new JoseEncoder());
        $parsedToken = $parser->parse($token);

        $id = $parsedToken->claims()->get('sub');
        $expirationTime = $parsedToken->claims()->get('exp');

        if ($expirationTime && time() > $expirationTime->getTimestamp()) {
            throw new UnauthorizedException();
        }

        (new AdminService())->getAdminById($id);

        $validator = new Validator();
        $validationData = new RelatedTo($id);

        try {
            $validator->assert($parsedToken, $validationData);
        } catch (\Lcobucci\JWT\Validation\RequiredConstraintsViolated $e) {
            throw new UnauthorizedException();
        }
    }

    public static function verifyCustomerToken(string $authorizationHeader): void
    {
        if (empty($authorizationHeader)) {
            throw new UnauthorizedException();
        }

        $token = self::parseBearerToken($authorizationHeader);
        $parser = new Parser(new JoseEncoder());
        $parsedToken = $parser->parse($token);

        $id = $parsedToken->claims()->get('sub');
        $expirationTime = $parsedToken->claims()->get('exp');

        if ($expirationTime && time() > $expirationTime->getTimestamp()) {
            throw new UnauthorizedException();
        }

        (new CustomerService())->getCustomerById($id);

        $validator = new Validator();
        $validationData = new RelatedTo($id);

        try {
            $validator->assert($parsedToken, $validationData);
        } catch (\Lcobucci\JWT\Validation\RequiredConstraintsViolated $e) {
            throw new UnauthorizedException();
        }
    }

    public static function getCustomerByToken(string $authorizationHeader): array
    {
        if (empty($authorizationHeader)) {
            throw new UnauthorizedException();
        }

        $token = self::parseBearerToken($authorizationHeader);
        $parser = new Parser(new JoseEncoder());
        $parsedToken = $parser->parse($token);

        $id = $parsedToken->claims()->get('sub');

        $customer = (new CustomerService())->getCustomerById($id);

        return $customer;
    }

    public static function decodedRefreshToken(string $refreshToken): string
    {
        $parser = new Parser(new JoseEncoder());
        $parsedToken = $parser->parse($refreshToken);

        $validator = new Validator();
        $validationData = new RelatedTo($parsedToken->claims()->get('sub'));

        try {
            $validator->assert($parsedToken, $validationData);

            return $parsedToken->claims()->get('sub');
        } catch (\Lcobucci\JWT\Validation\RequiredConstraintsViolated $e) {
            throw new UnauthorizedException();
        }
    }

    public static function calculateExpiration(): int
    {
        $parseExpirationString = function ($expiresIn) {
            $parts = explode(' ', $expiresIn);
            $value = (int)$parts[0];
            $unit = strtolower($parts[1]);

            switch ($unit) {
                case 'second':
                case 'seconds':
                    return $value * 1000;
                case 'minute':
                case 'minutes':
                    return $value * 60 * 1000;
                case 'hour':
                case 'hours':
                    return $value * 60 * 60 * 1000;
                case 'day':
                case 'days':
                    return $value * 24 * 60 * 60 * 1000;
                default:
                    throw new Exception("Unidade de tempo desconhecida: $unit");
            }
        };

        $expiresInMilliseconds = $parseExpirationString($_ENV['ACCESS_TOKEN_EXPIRES']);

        return time() * 1000 + $expiresInMilliseconds;
    }

    public static function parseBearerToken(string $authorizationHeader): string
    {
        if ( ! preg_match('/Bearer\s+(.*)$/i', $authorizationHeader, $matches)) {
            throw new UnauthorizedException();
        }

        return $matches[1];
    }
}
