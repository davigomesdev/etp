<?php

require __DIR__.'/../vendor/autoload.php';

use Dotenv\Dotenv;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;
use Slim\Factory\AppFactory;
use Slim\Middleware\MethodOverrideMiddleware;
use Src\Core\Exceptions\BadRequestException;
use Src\Core\Exceptions\Dtos\ReturnError;
use Src\Core\Exceptions\NotFoundException;

$dotenv = Dotenv::createImmutable(__DIR__.'/..');
$dotenv->load();

$app = AppFactory::create();
$app->addBodyParsingMiddleware();
$app->add(MethodOverrideMiddleware::class);

foreach (glob(__DIR__.'/../src/Utils/*.php') as $filename) {
    require_once $filename;
}

foreach (glob(__DIR__.'/../src/Routers/*.php') as $routerFile) {
    require $routerFile;
}

$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});

$app->get('/uploads/{dir}', function (Request $request, Response $response, array $args) {
    $dir = $args['dir'];
    $params = $request->getQueryParams();

    if (!isset($params['file'])) {
        return (new ReturnError($response, new BadRequestException('O parâmetro "file" é obrigatório')))->getResponse();
    }

    $file = $params['file'];
    if (!preg_match('/^[a-zA-Z0-9_\-.]+$/', $file)) {
        return (new ReturnError($response, new BadRequestException('Nome de arquivo inválido.')))->getResponse();
    }

    $baseDir = __DIR__.'/../uploads/'.$dir.'/';

    $filePath = $baseDir.$file;

    if (file_exists($filePath) && is_readable($filePath)) {
        $fileMimeType = mime_content_type($filePath);
        $stream = fopen($filePath, 'rb');

        return $response
            ->withHeader('Content-Type', $fileMimeType)
            ->withBody(new \Slim\Psr7\Stream($stream));
    } else {
        return (new ReturnError($response, new NotFoundException('Arquivo')))->getResponse();
    }
});

$app->add(function (Request $request, RequestHandlerInterface $handler) {
    $response = $handler->handle($request);

    $response = $response
        ->withHeader('Access-Control-Allow-Origin', '*')
        ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
        ->withHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept');

    return $response;
});

$app->map(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], '/{routes:.+}', function ($req, $res) {
    $handler = $this->notFoundHandler;

    return $handler($req, $res);
});

$app->run();
