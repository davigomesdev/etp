<?php

namespace Src\Core\Responses;

use Psr\Http\Message\ResponseInterface as Response;

class UpdateResponse extends AppResponse
{
    public bool $success;
    public string $message;
    public int $responseCode;

    public function __construct(Response $response, string $message)
    {
        $this->success = true;
        $this->message = "$message Atualizado com sucesso!";
        $this->responseCode = 200;

        parent::__construct($response, $this, $this->responseCode);
    }
}
