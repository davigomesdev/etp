<?php

namespace Src\Core\Responses;

use Psr\Http\Message\ResponseInterface as Response;

class AppResponse
{
    public Response $response;

    public function __construct(Response $response, array $objectResponse, int $responseCode)
    {
        $jsonData = json_encode($objectResponse);

        if ($jsonData === false) {
            throw new \RuntimeException('Unable to encode data to JSON: '.json_last_error_msg());
        }

        $response->getBody()->write($jsonData);

        $this->response = $response->withStatus($responseCode)
            ->withHeader('Content-Type', 'application/json');
    }

    public function getResponse(): Response
    {
        return $this->response;
    }
}
