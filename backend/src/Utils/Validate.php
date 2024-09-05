<?php

namespace Src\Utils;

use Src\Core\Exceptions\BadRequestException;

class Validate
{
    public static function validateCPF(string $cpf): bool
    {
        $cpf = preg_replace('/[^0-9]/', '', $cpf);

        if (strlen($cpf) != 11) {
            throw new BadRequestException('CPF deve conter exatamente 11 dígitos.');
        }

        if (preg_match('/(\d)\1{10}/', $cpf)) {
            throw new BadRequestException('CPF inválido: todos os dígitos são iguais.');
        }

        $sum = 0;
        for ($i = 0; $i < 9; $i++) {
            $sum += ($cpf[$i] * (10 - $i));
        }
        $remainder = $sum % 11;
        $digit1 = ($remainder < 2) ? 0 : (11 - $remainder);

        if ($cpf[9] != $digit1) {
            throw new BadRequestException('CPF inválido: primeiro dígito verificador incorreto.');
        }

        $sum = 0;
        for ($i = 0; $i < 10; $i++) {
            $sum += ($cpf[$i] * (11 - $i));
        }
        $remainder = $sum % 11;
        $digit2 = ($remainder < 2) ? 0 : (11 - $remainder);

        if ($cpf[10] != $digit2) {
            throw new BadRequestException('CPF inválido: segundo dígito verificador incorreto.');
        }

        return true;
    }
}
