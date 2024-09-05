//style imports
import * as Style from './paragraph.style';

//props imports
import { TitleProps } from './paragraph.props';

const Paragraph = ({ text, size, lineHeight, align, theme }: TitleProps) => {
	return (
		<Style.Container size={size} lineHeight={lineHeight} align={align} theme={theme}>
			{text}
		</Style.Container>
	);
};

export default Paragraph;
