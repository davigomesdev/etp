//style imports
import * as Style from './news.style';

//react imports
import { useEffect } from 'react';

//theme imports
import { theme } from '../../../themes/theme';

//enum imports
import { TextThemeEnum } from '../../../../domain/enums/text-theme.enum';
import { TextAlignEnum } from '../../../../domain/enums/text-align.enum';
import { PageUrlEnum } from '../../../../domain/enums/page-url.enum';

//react router
import { useNavigate } from 'react-router-dom';

//store imports
import { useGetAllBlogPostsStore } from '../../../../application/stores/api/blog-post/get-all-blog-post.store';

//component imports
import Title from '../../common/title/title';
import Paragraph from '../../common/paragraph/paragraph';

const News = () => {
	const navigate = useNavigate();
	const { blogPosts, execute } = useGetAllBlogPostsStore();

	const handleOnClickGoPoster = (id: string): void => {
		navigate(PageUrlEnum.POST + id);
	};

	useEffect(() => {
		execute();
	}, []);

	return (
		<Style.Container>
			<Title
				text='Últimas notícias'
				align={TextAlignEnum.LEFT}
				size={theme.font.size['2xl']}
				theme={TextThemeEnum.DARK}
			/>
			<Style.Content>
				<Style.Post onClick={() => handleOnClickGoPoster(blogPosts[0]?.id)}>
					<img
						src={`https://crm.etpeducacional.com.br/assets/images/blog/${blogPosts[0]?.cover}`}
						alt='poster'
					/>
					<Style.PostContent>
						<Style.Category>{blogPosts[0]?.category}</Style.Category>
						<Style.PostBody>
							<Title text={blogPosts[0]?.title} align={TextAlignEnum.LEFT} />
							<Paragraph
								text={blogPosts[0]?.description}
								align={TextAlignEnum.LEFT}
								theme={TextThemeEnum.LIGHT}
								lineHeight='18px'
							/>
						</Style.PostBody>
					</Style.PostContent>
				</Style.Post>
				<Style.PostList>
					<li onClick={() => handleOnClickGoPoster(blogPosts[1]?.id)}>
						<Style.PostMiniImage>
							<img
								src={`https://crm.etpeducacional.com.br/assets/images/blog/${blogPosts[1]?.cover}`}
								alt='poster'
							/>
						</Style.PostMiniImage>
						<Style.PostMiniContent>
							<span>{blogPosts[1]?.category}</span>
							<Title
								text={blogPosts[1]?.title}
								size={theme.font.size.sm}
								align={TextAlignEnum.LEFT}
								theme={TextThemeEnum.DARK}
							/>
							<Paragraph
								text={blogPosts[1]?.description}
								align={TextAlignEnum.LEFT}
								theme={TextThemeEnum.DARK}
								size={theme.font.size.xxs}
								lineHeight='13px'
							/>
						</Style.PostMiniContent>
					</li>
					<li onClick={() => handleOnClickGoPoster(blogPosts[2]?.id)}>
						<Style.PostMiniImage>
							<img
								src={`https://crm.etpeducacional.com.br/assets/images/blog/${blogPosts[2]?.cover}`}
								alt='poster'
							/>
						</Style.PostMiniImage>
						<Style.PostMiniContent>
							<span>{blogPosts[2]?.category}</span>
							<Title
								text={blogPosts[2]?.title}
								size={theme.font.size.sm}
								align={TextAlignEnum.LEFT}
								theme={TextThemeEnum.DARK}
							/>
							<Paragraph
								text={blogPosts[2]?.description}
								align={TextAlignEnum.LEFT}
								theme={TextThemeEnum.DARK}
								size={theme.font.size.xxs}
								lineHeight='13px'
							/>
						</Style.PostMiniContent>
					</li>
					<li onClick={() => handleOnClickGoPoster(blogPosts[3]?.id)}>
						<Style.PostMiniImage>
							<img
								src={`https://crm.etpeducacional.com.br/assets/images/blog/${blogPosts[3]?.cover}`}
								alt='poster'
							/>
						</Style.PostMiniImage>
						<Style.PostMiniContent>
							<span>{blogPosts[3]?.category}</span>
							<Title
								text={blogPosts[3]?.title}
								size={theme.font.size.sm}
								align={TextAlignEnum.LEFT}
								theme={TextThemeEnum.DARK}
							/>
							<Paragraph
								text={blogPosts[3]?.description}
								align={TextAlignEnum.LEFT}
								theme={TextThemeEnum.DARK}
								size={theme.font.size.xxs}
								lineHeight='13px'
							/>
						</Style.PostMiniContent>
					</li>
				</Style.PostList>
			</Style.Content>
		</Style.Container>
	);
};

export default News;
