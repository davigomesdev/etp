<?php

namespace Src\Core\Exceptions;

class InternalServerErrorException extends AppException
{
    public function __construct()
    {
        parent::__construct('Error interno.', 500);
    }
}
