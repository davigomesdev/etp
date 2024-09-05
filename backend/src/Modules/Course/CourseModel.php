<?php

namespace Src\Modules\Course;

use Aura\SqlQuery\QueryFactory;
use Src\Config\Connection as DB;

class CourseModel
{
    public function getById(string $id): array|bool
    {
        $query = new QueryFactory('mysql');
        $select = $query
            ->newSelect()
            ->cols(['*'])
            ->from('tb_courses')
            ->where('id = :id')
            ->bindValue('id', $id);

        $stmt = DB::getConnection()->prepare($select->getStatement());
        $stmt->execute($select->getBindValues());

        return $stmt->fetch(\PDO::FETCH_ASSOC);
    }

    public function getAll(): array
    {
        $query = new QueryFactory('mysql');
        $select = $query
            ->newSelect()
            ->cols(['*'])
            ->from('tb_courses');

        $stmt = DB::getConnection()->prepare($select->getStatement());
        $stmt->execute($select->getBindValues());

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }

    public function getAllByCategory(string $category): array
    {
        $query = new QueryFactory('mysql');
        $select = $query
            ->newSelect()
            ->cols(['*'])
            ->from('tb_courses')
            ->where('category = :category')
            ->bindValue('category', $category);

        $stmt = DB::getConnection()->prepare($select->getStatement());
        $stmt->execute($select->getBindValues());

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
}
