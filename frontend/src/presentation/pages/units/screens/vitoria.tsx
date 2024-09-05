//style imports
import * as Style from '../styles/unit.style';

//theme imports
import { theme } from '../../../themes/theme';

//enum imports
import { TextThemeEnum } from '../../../../domain/enums/text-theme.enum';

//image imports
import Foto0Image from '../../../assets/images/structure/vitoria/0.jpeg';
import Foto1Image from '../../../assets/images/structure/vitoria/1.jpeg';
import Foto2Image from '../../../assets/images/structure/vitoria/2.png';
import Foto3Image from '../../../assets/images/structure/vitoria/3.jpeg';
import Foto4Image from '../../../assets/images/structure/vitoria/4.jpeg';
import Foto5Image from '../../../assets/images/structure/vitoria/5.jpeg';
import Foto6Image from '../../../assets/images/structure/vitoria/6.jpeg';
import Foto7Image from '../../../assets/images/structure/vitoria/7.jpeg';
import Foto8Image from '../../../assets/images/structure/vitoria/8.jpeg';
import Foto9Image from '../../../assets/images/structure/vitoria/9.jpeg';
import Foto10Image from '../../../assets/images/structure/vitoria/10.jpeg';
import Foto11Image from '../../../assets/images/structure/vitoria/11.png';
import Foto12Image from '../../../assets/images/structure/vitoria/12.png';
import Foto13Image from '../../../assets/images/structure/vitoria/13.jpeg';
import Foto14Image from '../../../assets/images/structure/vitoria/14.jpeg';
import Foto15Image from '../../../assets/images/structure/vitoria/15.jpeg';
import Foto16Image from '../../../assets/images/structure/vitoria/16.png';
import Foto17Image from '../../../assets/images/structure/vitoria/17.png';
import Foto18Image from '../../../assets/images/structure/vitoria/18.jpeg';
import Foto19Image from '../../../assets/images/structure/vitoria/19.png';

//component imports
import Units from '../../../components/layouts/units/units';
import Banner from '../../../components/layouts/banner/banner';
import Title from '../../../components/common/title/title';
import Paragraph from '../../../components/common/paragraph/paragraph';
import UnitsCarousel from '../../../components/layouts/units-carousel/units-carousel';

const photos: string[] = [
	Foto0Image,
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
	Foto13Image,
	Foto14Image,
	Foto15Image,
	Foto16Image,
	Foto17Image,
	Foto18Image,
	Foto19Image,
];

const Vitoria = () => {
	return (
		<Style.Container>
			<Style.Container>
				<Banner />
				<Units />
				<Style.Content>
					<Style.DisplayMap
						title='map'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1660.7047195529262!2d-35.30862205364467!3d-8.117388221344475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aa53583c70d987%3A0xf9cdfbc1b4145659!2sETP%20-%20Escola%20T%C3%A9cnica%20Particular!5e0!3m2!1spt-BR!2sbr!4v1665236635492!5m2!1spt-BR!2sbr'
						width='100%'
						height='400'
						loading='lazy'
					/>
					<Style.Data>
						<Style.Header>
							<Title text='ETP Vitória' theme={TextThemeEnum.DARK} size={theme.font.size['2xl']} />
							<Paragraph text='Telefone: (81) 3523-0634' />
							<Paragraph text='Whatsapp: (81) 98582-3086' />
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

export default Vitoria;
