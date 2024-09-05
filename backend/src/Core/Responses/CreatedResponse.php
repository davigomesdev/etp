<?php

namespace Src\Core\Responses;

use Psr\Http\Message\ResponseInterface as Response;

class CreatedResponse extends AppResponse
{
    public bool $success;
    public string $message;
    public int $responseCode;

    public function __construct(Response $response, string $message)
    {
        $this->success = true;
        $this->message = "$message criado com sucesso!";
        $this->responseCode = 201;

        $responseArray = [
             'success' => $this->success,
             'message' => $this->message,
         ];

        parent::__construct($response, $responseArray, $this->responseCode);
    }
}
