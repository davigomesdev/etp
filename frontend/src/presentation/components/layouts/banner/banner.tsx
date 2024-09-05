//style imports
import * as Style from './banner.style';

//enum imports
import { TextThemeEnum } from '../../../../domain/enums/text-theme.enum';

//component imports
import Paragraph from '../../common/paragraph/paragraph';
import Title from '../../common/title/title';

const Banner = () => {
	return (
		<Style.Container>
			<Style.Content>
				<Title text='ETP Escola Técnica Particular' />
				<Paragraph
					text='A Escola Técnica Particular vem executando através dos anos, um trabalho voltado para o ensino técnico e profissionalizante, onde são prioridades a qualidade e a capacitação do profissional para as diversas áreas do mercado.'
					theme={TextThemeEnum.LIGHT}
				/>
			</Style.Content>
		</Style.Container>
	);
};

export default Banner;
