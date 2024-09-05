<?php

namespace Src\Modules\Indication;

class IndicationService extends IndicationModel
{
    public function createIndication(array $data): void
    {
        $data['date'] = date('Y-m-d');
        $data['time'] = date('H:i:s');
        parent::create($data);
    }
}
