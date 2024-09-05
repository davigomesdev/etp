<?php

use Src\Modules\BlogPost\BlogPostController;

$app->get('/blog/posts/{id}', [BlogPostController::class, 'getBlogPostByIdController']);

$app->get('/blog/posts', [BlogPostController::class, 'getAllBlogPostsController']);

$app->get('/blog/posts/category/{category}', [BlogPostController::class, 'getAllBlogPostsByCategoryController']);
