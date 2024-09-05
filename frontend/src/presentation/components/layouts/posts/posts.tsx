//style imports
import * as Style from './posts.style';

//react imports
import { useEffect, useState } from 'react';

//store imports
import { useGetAllBlogPostsStore } from '../../../../application/stores/api/blog-post/get-all-blog-post.store';

//swiper imports
import { Keyboard, Pagination, Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper } from 'swiper/react';

//component imports
import Post from '../post/post';

const Posts = () => {
	const { blogPosts, execute } = useGetAllBlogPostsStore();
	const [swiperKey, setSwiperKey] = useState<number>(0);

	const slides = blogPosts.map((post, index) => (
		<Style.Slide key={index}>
			<Post
				id={post.id}
				title={post.title}
				category='Eventos'
				summary='É com imensa alegria e gratidão que compartilhamos que a ETP - Escola Técnica Particular foi consagrada como a Melhor Escola de Cursos Técnicos em Vitória de Santo Antão, no ano de 2023! Este prestigioso reconhecimento não seria possível sem o esforço coletivo, a dedicação incansável de nossa equipe e, é claro, o brilho excepcional dos nossos alunos.Este prêmio é mais do que uma simples conquista; é a validação do nosso compromisso contínuo com a excelência educacional. Desde o primeiro dia, buscamos proporcionar uma experiência educacional excepcional, estimulando não apenas o conhecimento técnico, mas também o desenvolvimento integral de nossos alunos.Queremos expressar nossa profunda gratidão aos nossos alunos, verdadeiros protagonistas desta jornada. Cada um de vocês desempenha um papel vital em moldar o caráter e o sucesso da ETP. Este prêmio é uma celebração da sua dedicação, empenho e paixão pelo aprendizado.A jornada da ETP está repleta de conquistas e, ao receber o prêmio de Melhor Escola de Cursos Técnicos, reafirmamos nosso compromisso de continuar moldando futuros brilhantes. Estamos entusiasmados para os desafios que o futuro reserva e confiantes de que, juntos, continuaremos a trilhar o caminho da excelência educacional.Agradecemos a todos por fazerem parte desta história inspiradora e por tornarem a ETP uma referência em educação de qualidade. Continuaremos a escrever juntos cada capítulo dessa emocionante jornada!'
				image={`https://crm.etpeducacional.com.br/assets/images/blog/${post.cover}`}
			/>
		</Style.Slide>
	));

	useEffect(() => {
		setSwiperKey((prevKey) => prevKey + 1);
	}, [blogPosts]);

	if (slides)
		useEffect(() => {
			execute();
		}, []);

	return (
		<Style.Container>
			<Style.Content>
				<Swiper
					key={swiperKey}
					keyboard={true}
					navigation={true}
					modules={[Keyboard, Pagination, Navigation, Scrollbar, A11y, Autoplay]}
					spaceBetween={20}
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						600: {
							slidesPerView: 2,
						},
						800: {
							slidesPerView: 3,
						},
						1100: {
							slidesPerView: 4,
						},
					}}
					loop={true}
					className='carousel posts'
					autoplay={{
						delay: 3000,
						disableOnInteraction: true,
					}}
				>
					{slides}
				</Swiper>
			</Style.Content>
		</Style.Container>
	);
};

export default Posts;
