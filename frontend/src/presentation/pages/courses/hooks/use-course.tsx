//react
import { useEffect, useState } from 'react';

//react router imports
import { useParams } from 'react-router-dom';

//store imports
import { useGetCourseByIdStore } from '../../../../application/stores/api/course/get-course-by-id.store';

const useCourse = () => {
	const { id } = useParams();
	const { isLoading, course, execute } = useGetCourseByIdStore();

	const [selected, setSelected] = useState<string>('goal');

	const handleOnClickSetSelected = (menu: string): void => {
		setSelected(menu);
	};

	useEffect(() => {
		if (id) execute(id);
	}, [id]);

	return { isLoading, course, selected, handleOnClickSetSelected };
};

export default useCourse;
