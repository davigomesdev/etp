<?php

namespace Src\Modules\BlogPost;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Src\Core\Exceptions\Dtos\ReturnError;
use Src\Core\Responses\OkResponse;

class BlogPostController
{
    public function getBlogPostByIdController(Request $req, Response $res): Response
    {
        try {
            $posts = (new BlogPostService())->getBlogPostById($req->getAttribute('id'));

            return (new OkResponse($res, $posts))->getResponse();
        } catch (\Exception $e) {
            return (new ReturnError($res, $e))->getResponse();
        }
    }

    public function getAllBlogPostsController(Request $req, Response $res): Response
    {
        try {
            $limit = $req->getQueryParams()['limit'] ?? 10000000000;
            $limit = (int) $limit;

            $data = (new BlogPostService())->getAllBlogPosts($limit);

            return (new OkResponse($res, $data))->getResponse();
        } catch (\Exception $e) {
            return (new ReturnError($res, $e))->getResponse();
        }
    }

    public function getAllBlogPostsByCategoryController(Request $req, Response $res): Response
    {
        try {
            $limit = $req->getQueryParams()['limit'] ?? 10000000000;
            $limit = (int) $limit;

            $data = (new BlogPostService())->getAllBlogPostsByCategory($req->getAttribute('category'), $limit);

            return (new OkResponse($res, $data))->getResponse();
        } catch (\Exception $e) {
            return (new ReturnError($res, $e))->getResponse();
        }
    }
}
