//zustand imports
import { create } from 'zustand';

//byd game service imports
import * as courseService from '../../../../infrastructure/api/services/course.service';

//entity imports
import type { CourseEntity } from '../../../../domain/entities/course.entity';

type State = {
	courses: CourseEntity[];
	success: boolean;
	error: string | null;
	isLoading: boolean;
};

type Actions = {
	execute: () => void;
	reset: () => void;
};

const initialState: State = {
	courses: [],
	success: false,
	error: null,
	isLoading: false,
};

export const useGetAllCoursesStore = create<State & Actions>()((set) => ({
	...initialState,
	execute: async (): Promise<void> => {
		set({ isLoading: true });

		await courseService
			.getAllCourses()
			.then((data) => {
				set({
					courses: data,
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
