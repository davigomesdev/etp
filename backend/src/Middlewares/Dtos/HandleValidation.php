<?php

namespace Src\Middlewares\Dtos;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface as RequestHandler;
use Respect\Validation\Exceptions\ValidationException;
use Slim\Psr7\Response;
use Src\Core\Exceptions\BadRequestException;
use Src\Core\Exceptions\Dtos\ReturnError;

abstract class HandleValidation
{
    private array $validators;

    public function __construct(array $validators)
    {
        $this->validators = $validators;
    }

    public function __invoke(Request $request, RequestHandler $handler): Response
    {
        $data = $request->getParsedBody();

        foreach ($this->validators as $field => $validator) {
            try {
                $validator->setName($field)->assert($data[$field] ?? null);
            } catch (ValidationException $e) {
                $message = $e->getMessage();

                return (new ReturnError(new Response(), new BadRequestException($message)))->getResponse();
            }
        }

        return $handler->handle($request);
    }
}
