//zustand imports
import { create } from 'zustand';

//byd game service imports
import * as blogPostService from '../../../../infrastructure/api/services/blog-post.service';

//entity imports
import type { BlogPostEntity } from '../../../../domain/entities/blog-post.entity';

type State = {
	blogPosts: BlogPostEntity[];
	success: boolean;
	error: string | null;
	isLoading: boolean;
};

type Actions = {
	execute: () => void;
	reset: () => void;
};

const initialState: State = {
	blogPosts: [],
	success: false,
	error: null,
	isLoading: false,
};

export const useGetAllBlogPostsStore = create<State & Actions>()((set) => ({
	...initialState,
	execute: async (): Promise<void> => {
		set({ isLoading: true });

		await blogPostService
			.getAllBlogPosts()
			.then((data) => {
				set({
					blogPosts: data,
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
