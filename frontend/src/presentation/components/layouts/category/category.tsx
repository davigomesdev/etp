//style imports
import * as Style from './category.style';

//props imports
import { CategoryProps } from './category.props';

//enum imports
import { TextThemeEnum } from '../../../../domain/enums/text-theme.enum';
import { PageUrlEnum } from '../../../../domain/enums/page-url.enum';

//react router imports
import { useNavigate } from 'react-router-dom';

//component imports
import Title from '../../common/title/title';
import Paragraph from '../../common/paragraph/paragraph';

const Category = ({ title, text, category, icon }: CategoryProps) => {
	const navigate = useNavigate();

	const handleOnClickGoCoursesCategory = (): void => {
		navigate(category ? `${PageUrlEnum.COURSES}?categoria=${category}` : PageUrlEnum.COURSES);
	};

	return (
		<Style.Container
			onClick={handleOnClickGoCoursesCategory}
			spy={true}
			to='COURSES'
			smooth={true}
			duration={500}
		>
			<Style.Icon>{icon}</Style.Icon>
			<Title text={title} theme={TextThemeEnum.DARK} />
			<Paragraph text={text} />
		</Style.Container>
	);
};

export default Category;
