//style imports
import * as Style from './slide.style';

//props imports
import { SlideProps } from './slide.props';

const Slide = ({ desktopImage, mobileImage }: SlideProps) => {
	return (
		<Style.Container>
			<source src={desktopImage} />
			<source media='(max-width: 600px)' srcSet={mobileImage} />
			<img src={desktopImage} alt='SLIDE' />
		</Style.Container>
	);
};

export default Slide;
