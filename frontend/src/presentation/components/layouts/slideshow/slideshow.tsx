//style imports
import * as Style from './slideshow.style';

//swiper imports
import { Keyboard, Pagination, Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

//image imports
import Banner1DesktopImage from '../../../assets/images/banners/desktop/banner1.desktop.png';
import Banner2DesktopImage from '../../../assets/images/banners/desktop/banner2.desktop.png';
import Banner3DesktopImage from '../../../assets/images/banners/desktop/banner3.desktop.png';
import Banner1MobileImage from '../../../assets/images/banners/mobile/banner1.mobile.png';
import Banner2MobileImage from '../../../assets/images/banners/mobile/banner2.mobile.png';
import Banner3MobileImage from '../../../assets/images/banners/mobile/banner3.mobile.png';

//component imports
import Slide from '../slide/slide';

const images = [
	{ desktop: Banner1DesktopImage, mobile: Banner1MobileImage },
	{ desktop: Banner2DesktopImage, mobile: Banner2MobileImage },
	{ desktop: Banner3DesktopImage, mobile: Banner3MobileImage },
];

const Slideshow = () => {
	return (
		<Style.Container>
			<Style.Content>
				<Style.Slides
					keyboard={{
						enabled: true,
					}}
					pagination={{
						clickable: true,
					}}
					slidesPerView={1}
					navigation={true}
					modules={[Keyboard, Pagination, Navigation, Scrollbar, A11y, Autoplay]}
					loop={true}
					speed={1000}
					autoplay={{
						delay: 1500,
						disableOnInteraction: false,
					}}
				>
					{images &&
						images.map((image, index) => (
							<SwiperSlide key={index}>
								<Slide desktopImage={image.desktop} mobileImage={image.mobile} />
							</SwiperSlide>
						))}
				</Style.Slides>
			</Style.Content>
		</Style.Container>
	);
};

export default Slideshow;
