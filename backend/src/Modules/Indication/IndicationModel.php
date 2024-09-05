<?php

namespace Src\Modules\Indication;

use Aura\SqlQuery\QueryFactory;
use Src\Config\Connection as DB;

class IndicationModel
{
    public function create(array $data): void
    {
        $query = new QueryFactory('mysql');
        $insert = $query
            ->newInsert()
            ->into('tb_indications')
            ->cols([
                'name',
                'unit',
                'registration_number',
                'indications',
                'date',
                'time',
            ])->bindValues($data);

        $stmt = DB::getConnection()->prepare($insert->getStatement());
        $stmt->execute($insert->getBindValues());
    }
}
