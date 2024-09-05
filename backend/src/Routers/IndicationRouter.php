<?php

use Src\Modules\Indication\IndicationController;

$app->post('/indication', [IndicationController::class, 'createIndicationController']);
