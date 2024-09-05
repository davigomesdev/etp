<?php

namespace Src\Modules\Indication;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Src\Core\Exceptions\Dtos\ReturnError;
use Src\Core\Responses\CreatedResponse;

class IndicationController
{
    public function createIndicationController(Request $req, Response $res): Response
    {
        try {
            (new IndicationService())->createIndication($req->getParsedBody());

            return (new CreatedResponse($res, 'Indicação'))->getResponse();
        } catch (\Exception $e) {
            return (new ReturnError($res, $e))->getResponse();
        }
    }
}
