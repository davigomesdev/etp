//style imports
import * as Style from './feedback.style';

//theme imports
import { theme } from '../../../themes/theme';

//enum imports
import { TextAlignEnum } from '../../../../domain/enums/text-align.enum';
import { TextThemeEnum } from '../../../../domain/enums/text-theme.enum';

//props imports
import { FeedbackProps } from './feedback.props';

//icon imports
import { FaQuoteLeft } from 'react-icons/fa6';

//component imports
import Paragraph from '../../common/paragraph/paragraph';
import Title from '../../common/title/title';

const Feedback = ({ name, course, comment, photo }: FeedbackProps) => {
	return (
		<Style.Container>
			<FaQuoteLeft />
			<Paragraph text={comment} align={TextAlignEnum.LEFT} size={theme.font.size.xs} />
			<Style.Info>
				<Style.Photo>
					<img src={photo} alt={name} />
				</Style.Photo>
				<div>
					<Title
						text={name}
						align={TextAlignEnum.LEFT}
						theme={TextThemeEnum.DARK}
						size={theme.font.size.md}
					/>
					<Paragraph
						text={course}
						align={TextAlignEnum.LEFT}
						size={theme.font.size.xxs}
						lineHeight='13px'
					/>
				</div>
			</Style.Info>
		</Style.Container>
	);
};

export default Feedback;
