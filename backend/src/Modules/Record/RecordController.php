<?php

namespace Src\Modules\Record;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Src\Core\Exceptions\Dtos\ReturnError;
use Src\Core\Responses\CreatedResponse;

class RecordController
{
    public function createRecordController(Request $req, Response $res): Response
    {
        try {
            (new RecordService())->createRecord($req->getParsedBody());

            return (new CreatedResponse($res, 'Registro'))->getResponse();
        } catch (\Exception $e) {
            return (new ReturnError($res, $e))->getResponse();
        }
    }
}
