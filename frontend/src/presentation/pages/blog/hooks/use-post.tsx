//react
import { useEffect } from 'react';

//react router imports
import { useParams } from 'react-router-dom';

//store imports
import { useGetBlogPostByIdStore } from '../../../../application/stores/api/blog-post/get-blog-post-by-id.store';

const usePost = () => {
	const { id } = useParams();
	const { isLoading, blogPost, execute } = useGetBlogPostByIdStore();

	const addDomainToImgSrc = (htmlString: string, domain: string): string => {
		return htmlString.replace(/<img\s+([^>]*?)src=["'](?!http)([^"']+)["']/g, (_, p1, p2) => {
			return `<img ${p1}src="${domain}/${p2}"`;
		});
	};

	useEffect(() => {
		if (blogPost) document.title = `ETP | ${blogPost.title}`;
	}, [blogPost]);

	useEffect(() => {
		if (id) execute(id);
	}, [id]);

	return { isLoading, blogPost, addDomainToImgSrc };
};

export default usePost;
