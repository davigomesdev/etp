//style imports
import * as Style from './partnerships.style';

//theme imports
import { theme } from '../../../themes/theme';

//enum imports
import { TextThemeEnum } from '../../../../domain/enums/text-theme.enum';

//react imports
import { useEffect, useState, useRef } from 'react';

//image imports
import Partnership1Image from '../../../assets/images/partnerships/1.png';
import Partnership2Image from '../../../assets/images/partnerships/2.png';
import Partnership3Image from '../../../assets/images/partnerships/3.png';
import Partnership4Image from '../../../assets/images/partnerships/4.png';
import Partnership5Image from '../../../assets/images/partnerships/5.png';
import Partnership6Image from '../../../assets/images/partnerships/6.png';
import Partnership7Image from '../../../assets/images/partnerships/7.png';
import Partnership8Image from '../../../assets/images/partnerships/8.png';
import Partnership9Image from '../../../assets/images/partnerships/9.png';
import Partnership10Image from '../../../assets/images/partnerships/10.png';
import Partnership11Image from '../../../assets/images/partnerships/11.png';
import Partnership12Image from '../../../assets/images/partnerships/12.png';
import Partnership13Image from '../../../assets/images/partnerships/13.png';
import Partnership14Image from '../../../assets/images/partnerships/14.png';
import Partnership15Image from '../../../assets/images/partnerships/15.png';

//component imports
import Title from '../../common/title/title';

const Partnerships = () => {
	const mapsRef = useRef<HTMLDivElement>(null);
	const [translateX, setTranslateX] = useState<number>(0);
	const [autoScroll, setAutoScroll] = useState<NodeJS.Timeout | null>(null);

	useEffect(() => {
		const handleAutoScroll = () => {
			if (!mapsRef.current) return;

			const scrollWidth = mapsRef.current.scrollWidth;

			if (translateX <= -scrollWidth / 1.5) {
				setTranslateX(0);
			}
		};

		handleAutoScroll();
	}, [translateX]);

	useEffect(() => {
		const initialAutoScroll = setInterval(() => {
			setTranslateX((prev) => prev - 0.1);
		}, 5);
		setAutoScroll(initialAutoScroll);

		return () => {
			if (autoScroll) clearInterval(autoScroll);
		};
	}, []);

	return (
		<Style.Container>
			<Title text='Empresas parceiras' size={theme.font.size['2xl']} theme={TextThemeEnum.DARK} />
			<Style.Slider>
				<Style.Content ref={mapsRef} style={{ transform: `translateX(${translateX}px)` }}>
					<Style.Slide>
						<Style.Image>
							<img src={Partnership1Image} alt='Parceira' />
						</Style.Image>
					</Style.Slide>
					<Style.Slide>
						<Style.Image>
							<img src={Partnership2Image} alt='Parceira' />
						</Style.Image>
					</Style.Slide>
					<Style.Slide>
						<Style.Image>
							<img src={Partnership3Image} alt='Parceira' />
						</Style.Image>
					</Style.Slide>
					<Style.Slide>
						<Style.Image>
							<img src={Partnership4Image} alt='Parceira' />
						</Style.Image>
					</Style.Slide>
					<Style.Slide>
						<Style.Image>
							<img src={Partnership5Image} alt='Parceira' />
						</Style.Image>
					</Style.Slide>
					<Style.Slide>
						<Style.Image>
							<img src={Partnership6Image} alt='Parceira' />
						</Style.Image>
					</Style.Slide>
					<Style.Slide>
						<Style.Image>
							<img src={Partnership7Image} alt='Parceira' />
						</Style.Image>
					</Style.Slide>
					<Style.Slide>
						<Style.Image>
							<img src={Partnership8Image} alt='Parceira' />
						</Style.Image>
					</Style.Slide>
					<Style.Slide>
						<Style.Image>
							<img src={Partnership9Image} alt='Parceira' />
						</Style.Image>
					</Style.Slide>
					<Style.Slide>
						<Style.Image>
							<img src={Partnership10Image} alt='Parceira' />
						</Style.Image>
					</Style.Slide>
					<Style.Slide>
						<Style.Image>
							<img src={Partnership11Image} alt='Parceira' />
						</Style.Image>
					</Style.Slide>
					<Style.Slide>
						<Style.Image>
							<img src={Partnership12Image} alt='Parceira' />
						</Style.Image>
					</Style.Slide>
					<Style.Slide>
						<Style.Image>
							<img src={Partnership13Image} alt='Parceira' />
						</Style.Image>
					</Style.Slide>
					<Style.Slide>
						<Style.Image>
							<img src={Partnership14Image} alt='Parceira' />
						</Style.Image>
					</Style.Slide>
					<Style.Slide>
						<Style.Image>
							<img src={Partnership15Image} alt='Parceira' />
						</Style.Image>
					</Style.Slide>
				</Style.Content>
			</Style.Slider>
		</Style.Container>
	);
};

export default Partnerships;
