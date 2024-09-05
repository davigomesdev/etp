//react imports
import { useEffect, useState } from 'react';

//store imports
import { useGetAllCoursesStore } from '../../../../application/stores/api/course/get-all-courses.store';
import { CourseEntity } from '../../../../domain/entities/course.entity';

//react router imports
import { useLocation } from 'react-router-dom';

const useCourses = () => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);

	const { courses, execute } = useGetAllCoursesStore();

	const [healthCourses, setHealthCourses] = useState<CourseEntity[]>([]);
	const [industryCourses, setIndustryCourses] = useState<CourseEntity[]>([]);
	const [businessCourses, setBusinessCourses] = useState<CourseEntity[]>([]);

	const [isHealthCourses, setIsHealthCourses] = useState<boolean>(true);
	const [isIndustryCourses, setIsIndustryCourses] = useState<boolean>(true);
	const [isBusinessCourses, setIsBusinessCourses] = useState<boolean>(true);

	useEffect(() => {
		if (courses && courses.length > 0) {
			const health = courses.filter((course) => course.category === 'saúde');
			const industry = courses.filter((course) => course.category === 'indústria');
			const business = courses.filter((course) => course.category === 'negócios');

			setHealthCourses(health);
			setIndustryCourses(industry);
			setBusinessCourses(business);
		}
	}, [courses]);

	useEffect(() => {
		if (queryParams.get('categoria')) {
			const param = queryParams.get('categoria');
			setIsHealthCourses(param === 'saude');
			setIsIndustryCourses(param === 'industria');
			setIsBusinessCourses(param === 'negocios');
		} else {
			setIsHealthCourses(true);
			setIsIndustryCourses(true);
			setIsBusinessCourses(true);
		}
	}, [queryParams]);

	const scrollToCenter = () => {
		window.scrollTo({
			top: window.innerHeight / 2,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		execute();
		scrollToCenter();
	}, []);

	return {
		isHealthCourses,
		isIndustryCourses,
		isBusinessCourses,
		healthCourses,
		industryCourses,
		businessCourses,
	};
};

export default useCourses;
