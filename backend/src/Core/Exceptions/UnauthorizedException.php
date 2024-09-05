<?php

namespace Src\Core\Exceptions;

class UnauthorizedException extends AppException
{
    public function __construct()
    {
        parent::__construct('Usuário sem permissão.', 401);
    }
}
