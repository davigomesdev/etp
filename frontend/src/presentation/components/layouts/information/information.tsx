//style imports
import * as Style from './information.style';

//theme imports
import { theme } from '../../../themes/theme';

//enum imports
import { TextAlignEnum } from '../../../../domain/enums/text-align.enum';
import { TextThemeEnum } from '../../../../domain/enums/text-theme.enum';

//icon imports
import { FaPlus } from 'react-icons/fa6';

//image imports
import ManImage from '../../../assets/images/figures/man.png';

//component imports
import Title from '../../common/title/title';
import Paragraph from '../../common/paragraph/paragraph';

const Information = () => {
	return (
		<Style.Container>
			<Style.Content>
				<Title
					text='ETP, a educação que aponta para o seu futuro!'
					align={TextAlignEnum.LEFT}
					size={theme.font.size['2xl']}
					width='400px'
				/>
				<Style.List>
					<li>
						<FaPlus />
						<Title
							text='20 Cursos'
							align={TextAlignEnum.LEFT}
							size={theme.font.size['2xl']}
							width='400px'
						/>
						<Paragraph
							text='Descubra nossos cursos especializados!'
							align={TextAlignEnum.LEFT}
							theme={TextThemeEnum.LIGHT}
						/>
					</li>
					<li className='active'>
						<FaPlus />
						<Title
							text='9250 Alunos'
							align={TextAlignEnum.LEFT}
							size={theme.font.size['2xl']}
							width='400px'
						/>
						<Paragraph
							text='Educação de qualidade para seu futuro!'
							align={TextAlignEnum.LEFT}
							theme={TextThemeEnum.LIGHT}
						/>
					</li>
					<li>
						<FaPlus />
						<Title
							text='28 mil Formados'
							align={TextAlignEnum.LEFT}
							size={theme.font.size['2xl']}
							width='400px'
						/>
						<Paragraph
							text='Sucesso através da nossa formação!'
							align={TextAlignEnum.LEFT}
							theme={TextThemeEnum.LIGHT}
						/>
					</li>
				</Style.List>
				<Style.Image>
					<img src={ManImage} alt='Aluno' />
				</Style.Image>
			</Style.Content>
		</Style.Container>
	);
};

export default Information;
