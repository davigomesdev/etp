//style imports
import * as Style from './benefits.style';

//icon imports
import { PiGraduationCapLight } from 'react-icons/pi';
import { PiMoneyWavy } from 'react-icons/pi';
import { PiCertificate } from 'react-icons/pi';
import { GiTransparentTubes } from 'react-icons/gi';

//component imports
import Benefit from '../benefit/benefit';

const Benefits = () => {
	return (
		<Style.Container>
			<Style.Content>
				<Benefit
					title='Mercado de Trabalho'
					text='Focamos em preparar os alunos para o mercado de trabalho.'
					icon={<PiGraduationCapLight />}
				/>
				<Benefit
					title='Custo Benefício'
					text='Formação de qualidade com um investimento menor.'
					icon={<PiMoneyWavy />}
				/>
				<Benefit
					title='Certificação'
					text='Você recebe uma certificação que é reconhecida pelo mercado.'
					icon={<PiCertificate />}
				/>
				<Benefit
					title='Conhecimento Prático'
					text='O foco em práticas e laboratórios equipados.'
					icon={<GiTransparentTubes />}
				/>
			</Style.Content>
		</Style.Container>
	);
};

export default Benefits;
