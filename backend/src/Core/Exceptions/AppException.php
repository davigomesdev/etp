<?php

namespace Src\Core\Exceptions;

use Exception;

class AppException extends Exception
{
    protected int $errorCode;

    public function __construct($message, $errorCode)
    {
        parent::__construct($message);

        $this->errorCode = $errorCode;
    }

    public function getErrorCode(): int
    {
        return $this->errorCode;
    }
}
