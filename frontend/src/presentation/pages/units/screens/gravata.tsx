//style imports
import * as Style from '../styles/unit.style';

//theme imports
import { theme } from '../../../themes/theme';

//enum imports
import { TextThemeEnum } from '../../../../domain/enums/text-theme.enum';

//image imports
import Foto1Image from '../../../assets/images/structure/gravata/1.jpeg';
import Foto2Image from '../../../assets/images/structure/gravata/2.jpeg';
import Foto3Image from '../../../assets/images/structure/gravata/3.jpeg';
import Foto4Image from '../../../assets/images/structure/gravata/4.jpeg';
import Foto5Image from '../../../assets/images/structure/gravata/5.jpeg';
import Foto6Image from '../../../assets/images/structure/gravata/6.jpeg';
import Foto7Image from '../../../assets/images/structure/gravata/7.jpeg';
import Foto8Image from '../../../assets/images/structure/gravata/8.jpeg';
import Foto9Image from '../../../assets/images/structure/gravata/9.jpeg';
import Foto10Image from '../../../assets/images/structure/gravata/10.jpeg';
import Foto11Image from '../../../assets/images/structure/gravata/11.jpeg';
import Foto12Image from '../../../assets/images/structure/gravata/12.jpeg';

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
	Foto11Image,
	Foto12Image,
];

const Gravata = () => {
	return (
		<Style.Container>
			<Style.Container>
				<Banner />
				<Units />
				<Style.Content>
					<Style.DisplayMap
						title='map'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5584.806997822823!2d-35.573651453434515!3d-8.19722460673559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aa37b3b56f9223%3A0x8a55405237d502c2!2sETP%20-%20Escola%20T%C3%A9cnica%20Particular!5e0!3m2!1spt-BR!2sbr!4v1666202556425!5m2!1spt-BR!2sbr'
						width='100%'
						height='400'
						loading='lazy'
					/>
					<Style.Data>
						<Style.Header>
							<Title text='ETP Gravatá' theme={TextThemeEnum.DARK} size={theme.font.size['2xl']} />
							<Paragraph text='Telefone: (81) 2156-0634' />
							<Paragraph text='Whatsapp: (81) 99310-8974' />
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
		</Style.Container>
	);
};

export default Gravata;
