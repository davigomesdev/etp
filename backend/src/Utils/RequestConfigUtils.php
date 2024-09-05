<?php

namespace Src\Utils;

use Src\Core\Exceptions\BadRequestException;

class RequestConfigUtils
{
    public function config(string $method, $data = null, ?string $token = null, ?string $auth = null): array
    {
        $config = [
            'method'  => $method,
            'headers' => [],
        ];

        if ($method === 'DELETE' || $data === null) {
            $config['headers'] = [];
        } else {
            $config['body'] = json_encode($data);
            $config['headers'] = ['Content-Type' => 'application/json'];
        }

        if ($token && $auth === null) {
            $config['headers']['Authorization'] = $token;
        }

        if ($auth && $token === null) {
            $config['headers']['Authorization'] = 'Basic ' . base64_encode($auth);
        }

        return $config;
    }

    public function callApi(string $url, array $config, ?string $cert = null): ?array
    {
        $curl = curl_init();

        if ($cert === null) {
            curl_setopt_array($curl, [
                CURLOPT_URL            => $url,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION   => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST  => $config['method'],
                CURLOPT_POSTFIELDS     => $config['body'] ?? null,
                CURLOPT_HTTPHEADER     => array_map(function ($key, $value) {
                    return "$key: $value";
                }, array_keys($config['headers']), $config['headers']),
            ]);
        } else {
            curl_setopt_array($curl, [
                CURLOPT_URL            => $url,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION   => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST  => $config['method'],
                CURLOPT_POSTFIELDS     => $config['body'] ?? null,
                CURLOPT_SSLCERT        => $cert,
                CURLOPT_SSLCERTPASSWD  => '',
                CURLOPT_HTTPHEADER     => array_map(function ($key, $value) {
                    return "$key: $value";
                }, array_keys($config['headers']), $config['headers']),
            ]);
        }

        $response = curl_exec($curl);
        $error = curl_error($curl);

        if ($response === false) {
            throw new BadRequestException('Error na requisição: ' . $error); // Lança uma exceção com o erro da requisição

            return null;
        }

        curl_close($curl);

        return json_decode($response, true);
    }
}
