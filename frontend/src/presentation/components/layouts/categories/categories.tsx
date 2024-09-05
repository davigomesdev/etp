//style imports
import * as Style from './categories.style';

//theme imports
import { theme } from '../../../themes/theme';

//enum imports
import { TextThemeEnum } from '../../../../domain/enums/text-theme.enum';

//icon imports
import { PiGraduationCapLight } from 'react-icons/pi';
import { LiaBriefcaseMedicalSolid } from 'react-icons/lia';
import { BsBuildings } from 'react-icons/bs';
import { PiStorefrontLight } from 'react-icons/pi';

//component imports
import Title from '../../../components/common/title/title';
import Category from '../category/category';

const Categories = () => {
	return (
		<Style.Container>
			<Title
				text='Encontre o seu curso na ETP'
				size={theme.font.size['2xl']}
				theme={TextThemeEnum.DARK}
			/>
			<Style.Content>
				<Category
					title='Todos os cursos'
					text='Várias formações em diversas áreas e aqui te ajudamos a escolher o curso ideal.'
					icon={<PiGraduationCapLight />}
				/>
				<Category
					title='Saúde'
					text='O mercado busca profissionais, como: Enfermeiros, Esteticistas, Flebotomistas e muito mais.'
					category='saude'
					icon={<LiaBriefcaseMedicalSolid />}
				/>
				<Category
					title='Industriais'
					text='Áreas industriais, como: Automação, Eletrotécnica, Mecânico e muito mais.'
					category='industria'
					icon={<BsBuildings />}
				/>
				<Category
					title='Negócios'
					text='No mundo empresarial, os cursos mais procurados são: Administração e Logística.'
					category='negocios'
					icon={<PiStorefrontLight />}
				/>
			</Style.Content>
		</Style.Container>
	);
};

export default Categories;
