<?php

namespace Src\Core\Exceptions;

class NotFoundException extends AppException
{
    public function __construct(string $entity)
    {
        parent::__construct("$entity não encontrado.", 404);
    }
}
