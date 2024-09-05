<?php

namespace Src\Core\Responses;

use Psr\Http\Message\ResponseInterface as Response;

class OkResponse extends AppResponse
{
    public function __construct(Response $response, array $data)
    {
        parent::__construct($response, $data, 200);
    }
}
