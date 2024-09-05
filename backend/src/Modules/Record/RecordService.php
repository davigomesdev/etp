<?php

namespace Src\Modules\Record;

class RecordService extends RecordModel
{
    public function createRecord(array $data): void
    {
        $data['shift'] = '';
        $data['date'] = date('Y-m-d');
        $data['status'] = '';
        $data['direction'] = 'leadpage';
        $data['description'] = '';
        $data['ip_address'] = '';
        $data['responsible_user'] = '';

        parent::create($data);
    }
}
