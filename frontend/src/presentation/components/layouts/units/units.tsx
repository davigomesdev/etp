//style imports
import * as Style from './units.style';

//theme imports
import { theme } from '../../../themes/theme';

//react scroll imports
import { Element } from 'react-scroll';

//image imports
import Unit1Image from '../../../assets/images/units/unit1.jpg';
import Unit2Image from '../../../assets/images/units/unit2.jpg';
import Unit3Image from '../../../assets/images/units/unit3.jpg';

//component imports
import Title from '../../common/title/title';
import Unit from '../unit/unit';
import { PageUrlEnum } from '../../../../domain/enums/page-url.enum';

const Units = () => {
	return (
		<>
			<Element name='UNITS' />
			<Style.Container>
				<Title text='Conheça as nossas unidades' size={theme.font.size['2xl']} />
				<Style.Content>
					<Unit
						to={PageUrlEnum.CANDEIAS}
						name='Jaboatão'
						location='Av. Pres. Kennedy, 5349 - Candeias, Jaboatão dos Guararapes-PE'
						image={Unit1Image}
					/>
					<Unit
						to={PageUrlEnum.VITORIA}
						name='Vitória'
						location='Av. Henrique de Holanda, 2783 - Mauês, Vitória de Santo Antão-PE'
						image={Unit2Image}
					/>
					<Unit
						to={PageUrlEnum.GRAVATA}
						name='Gravatá'
						location='Av. Cícero Batista de Oliveira, 3081 - São José, Gravatá-PE'
						image={Unit3Image}
					/>
				</Style.Content>
			</Style.Container>
		</>
	);
};

export default Units;
