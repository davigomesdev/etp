//style imports
import * as Style from './course-carousel-item.style';

//theme imports
import { theme } from '../../../themes/theme';

//enum imports
import { TextThemeEnum } from '../../../../domain/enums/text-theme.enum';
import { TextAlignEnum } from '../../../../domain/enums/text-align.enum';
import { PageUrlEnum } from '../../../../domain/enums/page-url.enum';

//props imports
import { CourseCarouselItemProps } from './course-carousel-item.props';

//react router imports
import { useNavigate } from 'react-router-dom';

//component imports
import Button from '../../common/button/button';
import Paragraph from '../../common/paragraph/paragraph';
import Title from '../../common/title/title';
import serverEnv from '../../../../domain/envs/server.env';

const CourseCarouselItem = ({ id, name, type, image, summary, lp_link }: CourseCarouselItemProps) => {
	const navigate = useNavigate();

	const handleOnClickGoCourse = (): void => {
		if (lp_link)
			window.location.href = lp_link;
		else navigate(PageUrlEnum.COURSE + id);
	};

	return (
		<Style.Container>
			<Style.Image>
				<img src={`${serverEnv.apiUrl}/uploads/courses?file=${image}`} alt={name} />
				<Style.Shape>
					<Paragraph text={`${type} em`} align={TextAlignEnum.LEFT} theme={TextThemeEnum.LIGHT} />
					<Title text={name} align={TextAlignEnum.LEFT} />
				</Style.Shape>
			</Style.Image>
			<Paragraph text={summary} size={theme.font.size.sm} />
			<Button text='Saiba mais' onClick={handleOnClickGoCourse} />
		</Style.Container>
	);
};

export default CourseCarouselItem;
