//style imports
import * as Style from './feedbacks.style';

//theme imports
import { theme } from '../../../themes/theme';

//enum imports
import { TextThemeEnum } from '../../../../domain/enums/text-theme.enum';

//swiper imports
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper } from 'swiper/react';

//image imports
import Feedback1Image from '../../../assets/images/feedbacks/feedback1.png';
import Feedback2Image from '../../../assets/images/feedbacks/feedback2.png';
import Feedback3Image from '../../../assets/images/feedbacks/feedback3.png';
import Feedback4Image from '../../../assets/images/feedbacks/feedback4.png';
import Feedback5Image from '../../../assets/images/feedbacks/feedback5.png';
import Feedback6Image from '../../../assets/images/feedbacks/feedback6.png';
import Feedback7Image from '../../../assets/images/feedbacks/feedback7.png';
import Feedback8Image from '../../../assets/images/feedbacks/feedback8.png';
import Feedback9Image from '../../../assets/images/feedbacks/feedback9.png';

//component imports
import Title from '../../common/title/title';
import Feedback from '../feedback/feedback';

const Feedbacks = () => {
	return (
		<Style.Container>
			<Title text='Mais feedbacks' size={theme.font.size['2xl']} theme={TextThemeEnum.DARK} />
			<Style.Content>
				<Swiper
					className='swiper-feedbacks'
					modules={[Navigation, Scrollbar, A11y, Autoplay]}
					spaceBetween={20}
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						530: {
							slidesPerView: 2,
						},
						790: {
							slidesPerView: 3,
						},
						1100: {
							slidesPerView: 4,
						},
					}}
					loop={true}
					autoplay={{
						delay: 1000,
						disableOnInteraction: false,
					}}
				>
					<Style.Slide>
						<Feedback
							name='Amanda'
							course='Curso Técnico em Administração'
							comment='“Só tenho a agradecer a ETP, escola empenhada realmente com a educação e profissionalização dos seus alunos.”'
							photo={Feedback1Image}
						/>
					</Style.Slide>
					<Style.Slide>
						<Feedback
							name='Jefferson'
							course='Curso Técnico em Mecânica Industrial'
							comment='“Sempre sonhei em trabalhar na área industrial, estava cansado do comércio, até que fiz minha matricula na ETP e realizei meu sonho.”'
							photo={Feedback2Image}
						/>
					</Style.Slide>
					<Style.Slide>
						<Feedback
							name='Jenecir'
							course='Curso Técnico em Enfermagem'
							comment='“Me formei no curso técnico em enfermagem e hoje sou funcionário público, trabalhando na área que tanto sonhei."'
							photo={Feedback3Image}
						/>
					</Style.Slide>
					<Style.Slide>
						<Feedback
							name='Joselma'
							course='Curso Técnico em Enfermagem'
							comment='“Na ETP consegui realizar meu grande sonho de trabalhar na área da saúde.”'
							photo={Feedback4Image}
						/>
					</Style.Slide>
					<Style.Slide>
						<Feedback
							name='Josimar'
							course='Curso Técnico em Mecânica Industrial'
							comment='“Me formei em Mecânica Industrial e achei a escola TOP, assim não quis para os estudos, atualmente faço o curso técnico em Automação."'
							photo={Feedback5Image}
						/>
					</Style.Slide>
					<Style.Slide>
						<Feedback
							name='Lucas'
							course='Curso Técnico em Mecânica Industrial'
							comment='“Quer crescer profissionalmente? Faça ETP! Eu fiz e garanto a vocês que a escola é muito comprometida.”'
							photo={Feedback6Image}
						/>
					</Style.Slide>
					<Style.Slide>
						<Feedback
							name='Patrícia'
							course='Curso de Flebotomia'
							comment='“O crescimento profissional sempre foi uma prioridade na minha vida pessoal.”'
							photo={Feedback7Image}
						/>
					</Style.Slide>
					<Style.Slide>
						<Feedback
							name='Aline'
							course='Curso Técnico em Edificações'
							comment='“Melhor curso técnico da região! A ETP é sem dúvidas uma escola completa e que pensa realmente no crescimento profissional de todos os seus alunos.”'
							photo={Feedback8Image}
						/>
					</Style.Slide>
					<Style.Slide>
						<Feedback
							name='Alex'
							course='Curso Técnico em Mecânica Industrial'
							comment='“Me formei em Mecânica Industrial e achei a escola TOP”'
							photo={Feedback9Image}
						/>
					</Style.Slide>
				</Swiper>
			</Style.Content>
		</Style.Container>
	);
};

export default Feedbacks;
