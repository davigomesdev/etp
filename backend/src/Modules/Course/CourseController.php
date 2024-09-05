<?php

namespace Src\Modules\Course;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Src\Core\Exceptions\Dtos\ReturnError;
use Src\Core\Responses\OkResponse;

class CourseController
{
    public function getCourseByIdController(Request $req, Response $res): Response
    {
        try {
            $course = (new CourseService())->getCourseById($req->getAttribute('id'));

            return (new OkResponse($res, $course))->getResponse();
        } catch (\Exception $e) {
            return (new ReturnError($res, $e))->getResponse();
        }
    }

    public function getAllCoursesController(Request $req, Response $res): Response
    {
        try {
            $data = (new CourseService())->getAllCourses();

            return (new OkResponse($res, $data))->getResponse();
        } catch (\Exception $e) {
            return (new ReturnError($res, $e))->getResponse();
        }
    }

    public function getAllCoursesByCategoryController(Request $req, Response $res): Response
    {
        try {
            $data = (new CourseService())->getAllCoursesByCategory($req->getAttribute('category'));

            return (new OkResponse($res, $data))->getResponse();
        } catch (\Exception $e) {
            return (new ReturnError($res, $e))->getResponse();
        }
    }
}
