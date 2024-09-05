<?php

namespace Src\Config;

use Aura\Sql\ExtendedPdo;
use Src\Core\Exceptions\BadRequestException;

class Connection
{
    public static function getConnection()
    {
        try {
            $dsn = $_ENV['DB_DRIVER'].':host='.$_ENV['DB_HOST'].';dbname='.$_ENV['DB_DATABASE'].';charset=utf8';
            $conn = new ExtendedPdo(
                $dsn,
                $_ENV['DB_USERNAME'],
                $_ENV['DB_PASSWORD']
            );

            $conn->exec('SET NAMES utf8');

            return $conn;
        } catch (Exception $e) {
            throw new BadRequestException('Error de conexão com o banco de dados!');
        }
    }
}
