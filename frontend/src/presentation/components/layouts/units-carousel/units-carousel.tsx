//style imports
import * as Style from './units-carousel.style';

//theme imports
import { theme } from '../../../themes/theme';

//enum imports
import { TextThemeEnum } from '../../../../domain/enums/text-theme.enum';

//react imports
import { useEffect, useState } from 'react';

//props imports
import { UnitsCaroucelProps } from './units-carousel.props';

//swiper imports
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper } from 'swiper/react';

//component imports
import Title from '../../common/title/title';

const UnitsCarousel = ({ photos }: UnitsCaroucelProps) => {
	const [swiperKey, setSwiperKey] = useState<number>(0);

	const slides = photos.map((photo, index) => (
		<Style.Slide key={index}>
			<Style.Slide>
				<img src={photo} alt='Foto' />
			</Style.Slide>
		</Style.Slide>
	));

	useEffect(() => {
		setSwiperKey((prevKey) => prevKey + 1);
	}, [photos]);

	if (slides)
		return (
			<Style.Container>
				<Title
					text='Laborátórios e salas de aulas'
					size={theme.font.size['2xl']}
					theme={TextThemeEnum.DARK}
				/>
				<Style.Content>
					<Swiper
						key={swiperKey}
						className='carousel units'
						navigation={true}
						modules={[Navigation, Scrollbar, A11y, Autoplay]}
						spaceBetween={20}
						breakpoints={{
							0: {
								slidesPerView: 1,
							},
							530: {
								slidesPerView: 2,
							},
							790: {
								slidesPerView: 3,
							},
						}}
						loop={true}
						autoplay={{
							delay: 2000,
						}}
					>
						{slides}
					</Swiper>
				</Style.Content>
			</Style.Container>
		);
};

export default UnitsCarousel;
