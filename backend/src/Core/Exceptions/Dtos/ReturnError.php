<?php

namespace Src\Core\Exceptions\Dtos;

use Exception;
use Psr\Http\Message\ResponseInterface as Response;
use Src\Core\Exceptions\AppException;

class ReturnError
{
    public Response $response;
    public bool $error;
    public string $message;
    public ?int $errorCode;

    public function __construct(Response $response, Exception $error)
    {
        $this->error = true;

        if ($error instanceof AppException) {
            $this->message = $error->getMessage();
            $this->errorCode = $error->getErrorCode();
        } else {
            $this->message = $error->getMessage();
            $this->errorCode = 500;
        }

        $this->response = $response;
    }

    public function getResponse(): Response
    {
        $this->response->getBody()->write(json_encode([
            'error'     => $this->error,
            'message'   => $this->message,
            'errorCode' => $this->errorCode,
        ]));

        return $this->response->withStatus($this->errorCode)
          ->withHeader('Content-Type', 'application/json');
    }
}
