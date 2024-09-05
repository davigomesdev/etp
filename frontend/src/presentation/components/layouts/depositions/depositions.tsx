//style imports
import * as Style from './depositions.style';

//theme imports
import { theme } from '../../../themes/theme';

//react imports
import { useState } from 'react';

//enum imports
import { TextThemeEnum } from '../../../../domain/enums/text-theme.enum';

//swiper imports
import { Keyboard, Pagination, Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper } from 'swiper/react';

//image imports
import Deposition1Image from '../../../assets/images/depositions/deposition1.png';
import Deposition2Image from '../../../assets/images/depositions/deposition2.png';
import Deposition3Image from '../../../assets/images/depositions/deposition3.png';
import Deposition4Image from '../../../assets/images/depositions/deposition4.png';
import Deposition5Image from '../../../assets/images/depositions/deposition5.png';

//component imports
import Title from '../../common/title/title';
import Deposition from '../deposition/deposition';

const Depositions = () => {
	const [iframe, setIframe] = useState<string>('https://www.youtube.com/embed/74nG0oxA4t8');

	const handleOnClickSetIframe = (url: string): void => {
		setIframe(url);
	};

	return (
		<Style.Container>
			<Title
				text='Veja o que o estão falando sobre nós'
				size={theme.font.size['2xl']}
				theme={TextThemeEnum.DARK}
			/>
			<Style.Video src={iframe} title='Depoimento' />
			<Style.Content>
				<Swiper
					keyboard={{
						enabled: true,
					}}
					navigation={{
						enabled: true,
					}}
					modules={[Keyboard, Pagination, Navigation, Scrollbar, A11y, Autoplay]}
					spaceBetween={20}
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						420: {
							slidesPerView: 2,
						},
						690: {
							slidesPerView: 3,
						},
						900: {
							slidesPerView: 4,
						},
					}}
					loop={true}
					className='carousel depositions'
					autoplay={{
						delay: 2500,
						disableOnInteraction: true,
					}}
				>
					<Style.Slide>
						<Deposition
							image={Deposition1Image}
							onClick={() => handleOnClickSetIframe('https://www.youtube.com/embed/Vs2tC4aarhw')}
						/>
					</Style.Slide>
					<Style.Slide>
						<Deposition
							image={Deposition2Image}
							onClick={() => handleOnClickSetIframe('https://www.youtube.com/embed/IbQc8ra4s_4')}
						/>
					</Style.Slide>
					<Style.Slide>
						<Deposition
							image={Deposition3Image}
							onClick={() => handleOnClickSetIframe('https://www.youtube.com/embed/JKhMhTza2bY')}
						/>
					</Style.Slide>
					<Style.Slide>
						<Deposition
							image={Deposition4Image}
							onClick={() => handleOnClickSetIframe('https://www.youtube.com/embed/HeAEZEGAeuQ')}
						/>
					</Style.Slide>
					<Style.Slide>
						<Deposition
							image={Deposition5Image}
							onClick={() => handleOnClickSetIframe('https://www.youtube.com/embed/74nG0oxA4t8')}
						/>
					</Style.Slide>
				</Swiper>
			</Style.Content>
		</Style.Container>
	);
};

export default Depositions;
