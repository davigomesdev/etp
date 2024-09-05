//style imports
import * as Style from '../styles/unit.style';

//theme imports
import { theme } from '../../../themes/theme';

//enum imports
import { TextThemeEnum } from '../../../../domain/enums/text-theme.enum';

//image imports
import Foto1Image from '../../../assets/images/structure/jaboatao/img-1.jpeg';
import Foto2Image from '../../../assets/images/structure/jaboatao/img-2.png';
import Foto3Image from '../../../assets/images/structure/jaboatao/img-3.jpeg';
import Foto4Image from '../../../assets/images/structure/jaboatao/img-4.jpeg';
import Foto5Image from '../../../assets/images/structure/jaboatao/img-5.jpeg';
import Foto6Image from '../../../assets/images/structure/jaboatao/img-6.jpeg';
import Foto7Image from '../../../assets/images/structure/jaboatao/img-7.jpeg';
import Foto8Image from '../../../assets/images/structure/jaboatao/img-8.jpeg';
import Foto9Image from '../../../assets/images/structure/jaboatao/img-9.png';
import Foto10Image from '../../../assets/images/structure/jaboatao/img-10.png';

//component imports
import Units from '../../../components/layouts/units/units';
import Banner from '../../../components/layouts/banner/banner';
import Title from '../../../components/common/title/title';
import Paragraph from '../../../components/common/paragraph/paragraph';
import UnitsCarousel from '../../../components/layouts/units-carousel/units-carousel';

const photos: string[] = [
	Foto1Image,
	Foto2Image,
	Foto3Image,
	Foto4Image,
	Foto5Image,
	Foto6Image,
	Foto7Image,
	Foto8Image,
	Foto9Image,
	Foto10Image,
];

const Candeias = () => {
	return (
		<Style.Container>
			<Banner />
			<Units />
			<Style.Content>
				<Style.DisplayMap
					title='map'
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32517.04043601598!2d-34.926631210857245!3d-8.21100601998679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aae1134cc4e0b9%3A0xdd00506a9be9d135!2sETP%20-%20Escola%20T%C3%A9cnica%20Particular!5e0!3m2!1spt-BR!2sbr!4v1666202670731!5m2!1spt-BR!2sbr'
					width='100%'
					height='400'
					loading='lazy'
				/>
				<Style.Data>
					<Style.Header>
						<Title text='ETP Jaboatão' theme={TextThemeEnum.DARK} size={theme.font.size['2xl']} />
						<Paragraph text='Telefone: (81) 3469-7227' />
						<Paragraph text='Whatsapp: (81) 97329-5711' />
					</Style.Header>
					<Style.Hourly>
						<Title text='Segunda a sexta' size={theme.font.size.lg} />
						<Paragraph text='08:00 - 12:00' />
						<Paragraph text='14:00 - 22:00' />
					</Style.Hourly>
					<Style.Hourly>
						<Title text='Sábado' size={theme.font.size.lg} />
						<Paragraph text='08:00 - 12:00' />
						<Paragraph text='13:00 - 17:00' />
					</Style.Hourly>
				</Style.Data>
			</Style.Content>
			<UnitsCarousel photos={photos} />
		</Style.Container>
	);
};

export default Candeias;
