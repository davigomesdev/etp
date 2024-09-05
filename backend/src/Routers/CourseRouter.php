<?php

use Src\Modules\Course\CourseController;

$app->get('/courses/{id}', [CourseController::class, 'getCourseByIdController']);

$app->get('/courses', [CourseController::class, 'getAllCoursesController']);

$app->get('/courses/category/{category}', [CourseController::class, 'getAllCoursesByCategoryController']);
