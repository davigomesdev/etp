//style imports
import * as Style from './title.style';

//props imports
import { TitleProps } from './title.props';

const Title = ({ text, size, align, width, theme }: TitleProps) => {
	return (
		<Style.Container size={size} align={align} width={width} theme={theme}>
			{text}
		</Style.Container>
	);
};

export default Title;
