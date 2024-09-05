//service
import { type RequestConfig, requestConfig } from '../request-config';

//config imports
import serverEnv from '../../../domain/envs/server.env';

//enums imports
import { MethodEnum } from '../../../domain/enums/method.enum';

//entity imports
import type { BlogPostEntity } from '../../../domain/entities/blog-post.entity';

export const getBlogPostsById = async (id: string): Promise<BlogPostEntity> => {
	const config: RequestConfig = requestConfig(MethodEnum.GET);

	const res = await fetch(`${serverEnv.apiUrl}/blog/posts/${id}`, config)
		.then((res) => res.json())
		.catch((err) => console.log(err));

	return res;
};

export const getAllBlogPosts = async (): Promise<BlogPostEntity[]> => {
	const config: RequestConfig = requestConfig(MethodEnum.GET);

	const res = await fetch(`${serverEnv.apiUrl}/blog/posts`, config)
		.then((res) => res.json())
		.catch((err) => console.log(err));

	return res;
};
