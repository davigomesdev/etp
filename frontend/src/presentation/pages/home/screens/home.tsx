//style imports
import * as Style from '../styles/home.style';

//component imports
import Slideshow from '../../../components/layouts/slideshow/slideshow';
import Benefits from '../../../components/layouts/benefits/benefits';
import Categories from '../../../components/layouts/categories/categories';
import CourseCarousel from '../../../components/layouts/course-carousel/course-carousel';
import Information from '../../../components/layouts/information/information';
import Depositions from '../../../components/layouts/depositions/depositions';
import Units from '../../../components/layouts/units/units';
import News from '../../../components/layouts/news/news';
import Posts from '../../../components/layouts/posts/posts';
import Feedbacks from '../../../components/layouts/feedbacks/feedbacks';
import useHome from '../hooks/use-home';
import Partnerships from '../../../components/layouts/partnerships/partnerships';

const Home = () => {
	const { courses } = useHome();

	return (
		<Style.Container>
			<Style.SlidesContainer>
				<Slideshow />
				<Benefits />
			</Style.SlidesContainer>
			<Categories />
			<CourseCarousel courses={courses} />
			<Information />
			<Depositions />
			<Units />
			<News />
			<Posts />
			<Feedbacks />
			<Partnerships />
		</Style.Container>
	);
};

export default Home;
