//style imports
import * as Style from './footer.style';

//enum imports
import { TextThemeEnum } from '../../../../domain/enums/text-theme.enum';
import { PageUrlEnum } from '../../../../domain/enums/page-url.enum';

//icon imports
import { MdOutlineEmail } from 'react-icons/md';

//image imports
import ETPLogoLightImage from '../../../assets/images/etp-logo-light.png';

//component imports
import Paragraph from '../../common/paragraph/paragraph';
import FooterMenu from '../footer-menu/footer-menu';

const Footer = () => {
	const handleOnClickEmail = (): void => {
		window.open('http://etpeducacional.com.br:2095/', '_blank');
	};

	const handleOnClickJobs = (): void => {
		location.href = 'https://crm.etpeducacional.com.br/curriculo';
	};

	return (
		<>
			<Style.Container>
				<Style.Content>
					<Style.Logo>
						<img src={ETPLogoLightImage} alt='ETP' />
					</Style.Logo>
					<Style.Menus>
						<FooterMenu url={PageUrlEnum.HOME} title='Inicial' />
						<FooterMenu url={PageUrlEnum.COURSES} title='Cursos' />
						<FooterMenu url={PageUrlEnum.UNITS} title='Unidades' />
						<FooterMenu url={PageUrlEnum.BLOG} title='Blog' />
						<FooterMenu url={PageUrlEnum.ABOUT} title='Sobre' />
					</Style.Menus>
					<Style.Social>
						<MdOutlineEmail onClick={handleOnClickEmail} />
						<span onClick={handleOnClickJobs}>
							<Paragraph text='Trabalhe conosco' lineHeight='13px' theme={TextThemeEnum.LIGHT} />
						</span>
					</Style.Social>
				</Style.Content>
			</Style.Container>
			<Style.Copy>
				<Paragraph
					text='© Etp Escola Técnica Particular - 2022'
					lineHeight='13px'
					theme={TextThemeEnum.LIGHT}
				/>
			</Style.Copy>
		</>
	);
};

export default Footer;
