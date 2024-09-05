//style imports
import * as Style from './post.style';

//theme imports
import { theme } from '../../../themes/theme';

//props imports
import { PostProps } from './post.props';

//enum imports
import { TextThemeEnum } from '../../../../domain/enums/text-theme.enum';
import { TextAlignEnum } from '../../../../domain/enums/text-align.enum';
import { PageUrlEnum } from '../../../../domain/enums/page-url.enum';

//react router imports
import { useNavigate } from 'react-router-dom';

//component imports
import Title from '../../common/title/title';
import Paragraph from '../../common/paragraph/paragraph';

const Post = ({ id, title, summary, category, image }: PostProps) => {
	const navigate = useNavigate();

	const handleOnClickGoPoster = (id: string): void => {
		navigate(PageUrlEnum.POST + id);
	};

	return (
		<Style.Container onClick={() => handleOnClickGoPoster(id)}>
			<Style.Image>
				<img src={image} alt='poster' />
			</Style.Image>
			<Style.Content className='content'>
				<Style.Category>{category}</Style.Category>
				<Title
					text={title}
					align={TextAlignEnum.LEFT}
					theme={TextThemeEnum.DARK}
					size={theme.font.size.sm}
				/>
				<Paragraph
					text={summary}
					align={TextAlignEnum.JUSTIFY}
					size={theme.font.size.xs}
					lineHeight='18px'
				/>
			</Style.Content>
			<Style.Blur />
		</Style.Container>
	);
};

export default Post;
