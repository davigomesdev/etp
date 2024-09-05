//style imports
import * as Style from '../styles/post.style';

//theme imports
import { theme } from '../../../themes/theme';

//enum imports
import { TextThemeEnum } from '../../../../domain/enums/text-theme.enum';
import { TextAlignEnum } from '../../../../domain/enums/text-align.enum';

//util imports
import { formatDate } from '../../../../application/utils/format.util';

// HTML parser import
import parse from 'html-react-parser';

//hook imports
import usePost from '../hooks/use-post';

//icon imports
import { SlCalender } from 'react-icons/sl';

//component imports
import Banner from '../../../components/layouts/banner/banner';
import Title from '../../../components/common/title/title';
import Loading from '../../../components/common/loading/loading';

const Post = () => {
	const { isLoading, blogPost, addDomainToImgSrc } = usePost();

	if (isLoading || !blogPost) return <Loading />;

	return (
		<Style.Container>
			<Banner />
			<Style.Content>
				<Style.Post>
					<Style.Header>
						<Title
							text={blogPost.title}
							align={TextAlignEnum.LEFT}
							theme={TextThemeEnum.DARK}
							size={theme.font.size['2xl']}
						/>
						<p>
							<SlCalender />
							{formatDate(blogPost.date)}
						</p>
					</Style.Header>
					<Style.Body>
						<div>
							{parse(addDomainToImgSrc(blogPost.body, 'https://crm.etpeducacional.com.br/'))}
						</div>
					</Style.Body>
				</Style.Post>
			</Style.Content>
		</Style.Container>
	);
};

export default Post;
