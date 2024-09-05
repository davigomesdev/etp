<?php

namespace Src\Modules\BlogPost;

use Aura\SqlQuery\QueryFactory;
use Src\Config\Connection as DB;

class BlogPostModel
{
    public function getById(string $id): array|bool
    {
        $query = new QueryFactory('mysql');
        $select = $query
            ->newSelect()
            ->cols(['*'])
            ->from('tb_blog_posts')
            ->where('id = :id')
            ->bindValue('id', $id);

        $stmt = DB::getConnection()->prepare($select->getStatement());
        $stmt->execute($select->getBindValues());

        return $stmt->fetch(\PDO::FETCH_ASSOC);
    }

    public function getAll(int $limit = 100000000000): array
    {
        $query = new QueryFactory('mysql');
        $select = $query
            ->newSelect()
            ->cols(['*'])
            ->from('tb_blog_posts')
            ->orderBy(['id DESC'])
            ->limit($limit);

        $stmt = DB::getConnection()->prepare($select->getStatement());
        $stmt->execute($select->getBindValues());

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }

    public function getAllByCategory(string $category, int $limit = 100000000000): array
    {
        $query = new QueryFactory('mysql');
        $select = $query
            ->newSelect()
            ->cols(['*'])
            ->from('tb_blog_posts')
            ->where('category = :category')
            ->bindValue('category', $category)
            ->orderBy(['id DESC'])
            ->limit($limit);

        $stmt = DB::getConnection()->prepare($select->getStatement());
        $stmt->execute($select->getBindValues());

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
}
