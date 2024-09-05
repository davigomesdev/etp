<?php

namespace Src\Modules\Record;

use Aura\SqlQuery\QueryFactory;
use Src\Config\Connection as DB;

class RecordModel
{
    public function create(array $data): void
    {
        $query = new QueryFactory('mysql');
        $insert = $query
            ->newInsert()
            ->into('tb_records')
            ->cols([
                'name',
                'email',
                'phone',
                'unit',
                'course',
                'shift',
                'date',
                'status',
                'direction',
                'description',
                'ip_address',
                'responsible_user',
            ])->bindValues($data);

        $stmt = DB::getConnection()->prepare($insert->getStatement());
        $stmt->execute($insert->getBindValues());
    }
}
