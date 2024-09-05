<?php

use Src\Modules\Record\RecordController;

$app->post('/records', [RecordController::class, 'createRecordController']);
