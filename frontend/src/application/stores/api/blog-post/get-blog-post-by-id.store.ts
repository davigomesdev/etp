//zustand imports
import { create } from 'zustand';

//byd game service imports
import * as blogPostService from '../../../../infrastructure/api/services/blog-post.service';

//entity imports
import type { BlogPostEntity } from '../../../../domain/entities/blog-post.entity';

type State = {
	blogPost: BlogPostEntity | null;
	success: boolean;
	error: string | null;
	isLoading: boolean;
};

type Actions = {
	execute: (id: string) => void;
	reset: () => void;
};

const initialState: State = {
	blogPost: null,
	success: false,
	error: null,
	isLoading: false,
};

export const useGetBlogPostByIdStore = create<State & Actions>()((set) => ({
	...initialState,
	execute: async (id: string): Promise<void> => {
		set({ isLoading: true });

		await blogPostService
			.getBlogPostsById(id)
			.then((data) => {
				set({
					blogPost: data,
					isLoading: false,
					success: true,
					error: null,
				});
			})
			.catch((error) => {
				set({
					isLoading: false,
					success: false,
					error: error.message,
				});
			});
	},
	reset: (): void => {
		set({
			isLoading: false,
			success: false,
			error: null,
		});
	},
}));
