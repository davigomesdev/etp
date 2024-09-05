//react imports
import { useEffect } from 'react';

//enum imports
import { PageUrlEnum } from '../../../../domain/enums/page-url.enum';

//store imports
import { useGetAllBlogPostsStore } from '../../../../application/stores/api/blog-post/get-all-blog-post.store';

//react router
import { useNavigate } from 'react-router-dom';

const useBlog = () => {
	const navigate = useNavigate();
	const { isLoading, blogPosts, execute } = useGetAllBlogPostsStore();

	const handleOnClickGoPoster = (id: string): void => {
		navigate(PageUrlEnum.POST + id);
	};

	useEffect(() => {
		execute();
	}, []);

	return { isLoading, blogPosts, handleOnClickGoPoster };
};

export default useBlog;
