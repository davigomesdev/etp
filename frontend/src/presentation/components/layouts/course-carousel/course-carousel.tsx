//style imports
import * as Style from './course-carousel.style';

//theme imports
import { theme } from '../../../themes/theme';

//enum imports
import { TextThemeEnum } from '../../../../domain/enums/text-theme.enum';

//react imports
import { useEffect, useState } from 'react';

//swiper imports
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper } from 'swiper/react';

//props imports
import { CourseCarouselProps } from './course-carousel.props';

//component imports
import Title from '../../common/title/title';
import CourseCarouselItem from '../course-carousel-item/course-carousel-item';

const CourseCarousel = ({ title, courses }: CourseCarouselProps) => {
	const [swiperKey, setSwiperKey] = useState<number>(0);

	const slides = courses.map((course, index) => (
		<Style.Slide key={index}>
			<CourseCarouselItem
				id={course.id}
				name={course.name}
				type={course.type}
				summary={course.goal}
				image={course.photo}
				lp_link={course.lp_link}
			/>
		</Style.Slide>
	));

	useEffect(() => {
		setSwiperKey((prevKey) => prevKey + 1);
	}, [courses]);

	if (slides)
		return (
			<Style.Container>
				{title && <Title text={title} size={theme.font.size['2xl']} theme={TextThemeEnum.DARK} />}
				<Style.Content>
					<Swiper
						key={swiperKey}
						keyboard={true}
						navigation={true}
						modules={[Navigation, Scrollbar, A11y, Autoplay]}
						spaceBetween={10}
						breakpoints={{
							0: {
								slidesPerView: 1,
							},
							600: {
								slidesPerView: 2,
							},
							837: {
								slidesPerView: 3,
							},
							1100: {
								slidesPerView: 4,
							},
						}}
						loop={true}
						className='carousel courses'
						autoplay={{
							delay: 2500,
							pauseOnMouseEnter: true,
						}}
					>
						{slides}
					</Swiper>
				</Style.Content>
			</Style.Container>
		);
};

export default CourseCarousel;
