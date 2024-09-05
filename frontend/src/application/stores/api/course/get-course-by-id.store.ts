//zustand imports
import { create } from 'zustand';

//byd game service imports
import * as courseService from '../../../../infrastructure/api/services/course.service';

//entity imports
import type { CourseEntity } from '../../../../domain/entities/course.entity';

type State = {
	course: CourseEntity | null;
	success: boolean;
	error: string | null;
	isLoading: boolean;
};

type Actions = {
	execute: (id: string) => void;
	reset: () => void;
};

const initialState: State = {
	course: null,
	success: false,
	error: null,
	isLoading: false,
};

export const useGetCourseByIdStore = create<State & Actions>()((set) => ({
	...initialState,
	execute: async (id: string): Promise<void> => {
		set({ isLoading: true });

		await courseService
			.getCourseById(id)
			.then((data) => {
				set({
					course: data,
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
