<?php

namespace Src\Modules\BlogPost;

use Src\Core\Exceptions\NotFoundException;

class BlogPostService extends BlogPostModel
{
    public function getBlogPostById(string $id): array
    {
        $course = parent::getById($id);

        if (!$course) {
            throw new NotFoundException('Poster');
        }

        return $course;
    }

    public function getAllBlogPosts(int $limit): array
    {
        return parent::getAll($limit);
    }

    public function getAllBlogPostsByCategory(string $category, int $limit): array
    {
        return parent::getAllByCategory($category, $limit);
    }
}
