<?php

namespace Src\Utils;

class PasswordUtils
{
    public static function createPasswordHashed(string $password): string
    {
        return hash('sha256', $password);
    }

    public static function validatePassword(string $password, string $passwordHashed): bool
    {
        $hash = hash('sha256', $password);

        return $hash === $passwordHashed;
    }
}
