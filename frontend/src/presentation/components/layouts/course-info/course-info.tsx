//style imports
import * as Style from './course-info.style';

//props imports
import { CategoryProps } from './course-info.props';

//enum imports
import { TextThemeEnum } from '../../../../domain/enums/text-theme.enum';

//component imports
import Title from '../../common/title/title';
import Paragraph from '../../common/paragraph/paragraph';
import { theme } from '../../../themes/theme';

const CourseInfo = ({ title, text, icon }: CategoryProps) => {
	return (
		<Style.Container>
			<Style.Icon>{icon}</Style.Icon>
			<Title text={title} theme={TextThemeEnum.DARK} size={theme.font.size['2xl']} />
			<Paragraph text={text} size={theme.font.size.lg} />
		</Style.Container>
	);
};

export default CourseInfo;
