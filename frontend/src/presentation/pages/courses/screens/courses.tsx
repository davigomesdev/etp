//style imports
import * as Style from '../styles/course.style';

//hook imports
import useCourses from '../hooks/use-courses';

//react scroll imports
import { Element } from 'react-scroll';

//component imports
import Banner from '../../../components/layouts/banner/banner';
import Categories from '../../../components/layouts/categories/categories';
import CourseCarousel from '../../../components/layouts/course-carousel/course-carousel';

const Courses = () => {
	const {
		isHealthCourses,
		isIndustryCourses,
		isBusinessCourses,
		healthCourses,
		industryCourses,
		businessCourses,
	} = useCourses();

	return (
		<Style.Container>
			<Banner />
			<Categories />
			<Element name='COURSES' />
			{isHealthCourses && <CourseCarousel title={isHealthCourses && isIndustryCourses && isBusinessCourses ? 'Todos os cursos': 'Saúde'} courses={healthCourses} />}
			{isIndustryCourses && (
				<CourseCarousel title={isHealthCourses && isIndustryCourses && isBusinessCourses ? '': 'Industriais'} courses={industryCourses} />
			)}
			{isBusinessCourses && <CourseCarousel title={isHealthCourses && isIndustryCourses && isBusinessCourses ? '': 'Negócios'} courses={businessCourses} />}
		</Style.Container>
	);
};

export default Courses;
