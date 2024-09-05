//react imports
import { useEffect } from 'react';

//store imports
import { useGetAllCoursesStore } from '../../../../application/stores/api/course/get-all-courses.store';

const useHome = () => {
	const { courses, execute } = useGetAllCoursesStore();

	useEffect(() => {
		execute();
	}, []);

	return { courses };
};

export default useHome;
