//style imports
import * as Style from '../styles/blog.style';

//enum imports
import { TextThemeEnum } from '../../../../domain/enums/text-theme.enum';
import { TextAlignEnum } from '../../../../domain/enums/text-align.enum';

//hook imports
import useBlog from '../hooks/use-blog';

//image imports
import OfferImage from '../../../assets/images/figures/banner-blog.png';

//component imports
import Banner from '../../../components/layouts/banner/banner';
import News from '../../../components/layouts/news/news';
import Title from '../../../components/common/title/title';
import Paragraph from '../../../components/common/paragraph/paragraph';

const Blog = () => {
	const { blogPosts, handleOnClickGoPoster } = useBlog();

	return (
		<Style.Container>
			<Banner />
			<News />
			<Style.Content>
				<Style.Posts>
					{blogPosts &&
						blogPosts.map((post, index) => (
							<Style.Post key={index} onClick={() => handleOnClickGoPoster(post.id)}>
								<Style.PostImage>
									<img
										src={`https://crm.etpeducacional.com.br/assets/images/blog/${post.cover}`}
										alt='poster'
									/>
								</Style.PostImage>
								<Style.PostContent>
									<span>{post.category}</span>
									<Title text={post.title} align={TextAlignEnum.LEFT} theme={TextThemeEnum.DARK} />
									<Paragraph
										text={post.description}
										align={TextAlignEnum.LEFT}
										theme={TextThemeEnum.DARK}
										lineHeight='17px'
									/>
								</Style.PostContent>
							</Style.Post>
						))}
				</Style.Posts>
				<Style.Offer>
					<img src={OfferImage} alt='Oferta' />
				</Style.Offer>
			</Style.Content>
		</Style.Container>
	);
};

export default Blog;
