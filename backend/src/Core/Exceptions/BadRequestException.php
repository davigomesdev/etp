<?php

namespace Src\Core\Exceptions;

class BadRequestException extends AppException
{
    public function __construct(string $message)
    {
        parent::__construct($message, 400);
    }
}
