<?php

namespace Src\Modules\Course;

use Src\Core\Exceptions\NotFoundException;

class CourseService extends CourseModel
{
    public function getCourseById(string $id): array
    {
        $course = parent::getById($id);

        if (!$course) {
            throw new NotFoundException('Curso');
        }

        return $course;
    }

    public function getAllCourses(): array
    {
        return parent::getAll();
    }

    public function getAllCoursesByCategory(string $category): array
    {
        return parent::getAllByCategory($category);
    }
}
