//style imports
import * as Style from '../styles/about.style';

//enum imports
import { TextThemeEnum } from '../../../../domain/enums/text-theme.enum';

//component imports
import Banner from '../../../components/layouts/banner/banner';
import Feedbacks from '../../../components/layouts/feedbacks/feedbacks';
import Depositions from '../../../components/layouts/depositions/depositions';
import Title from '../../../components/common/title/title';
import Paragraph from '../../../components/common/paragraph/paragraph';
import Units from '../../../components/layouts/units/units';

const About = () => {
	return (
		<Style.Container>
			<Banner />
			<Style.Content>
				<div>
					<Title text='Nosso Objetivo' theme={TextThemeEnum.DARK} />
					<Paragraph text='A Escola Técnica Particular tem como objetivo ministrar Educação Profissional Técnica de nível médio, tendo como meta, em médio prazo, oferecer cursos técnicos de diversos eixos tecnológicos mediante diagnóstico da demanda de mercado de trabalho e da necessidade de se construir novas alternativas de organização educacional, que sejam de um lado comprometidas com o novo significado do trabalho no contexto da globalização e, de outro, com a pessoa humana que se apropriará dos conhecimentos para se habilitar como profissional e para desenvolver competências na prática social.' />
				</div>
				<div>
					<Title text='Missão' theme={TextThemeEnum.DARK} />
					<Paragraph text='A Escola Técnica Particular tem como objetivo ministrar Educação Profissional Técnica de nível médio, tendo como meta, em médio prazo, oferecer cursos técnicos de diversos eixos tecnológicos mediante diagnóstico da demanda de mercado de trabalho e da necessidade de se construir novas alternativas de organização educacional, que sejam de um lado comprometidas com o novo significado do trabalho no contexto da globalização e, de outro, com a pessoa humana que se apropriará dos conhecimentos para se habilitar como profissional e para desenvolver competências na prática social.' />
				</div>
				<div>
					<Title text='Visão' theme={TextThemeEnum.DARK} />
					<Paragraph text='Ser referência no ensino técnico/profissional, através de conteúdos atualizados, e do ensino prático com os melhores recursos; formando profissionais de sucesso para o mercado de trabalho.' />
				</div>
				<div>
					<Title text='Valores' theme={TextThemeEnum.DARK} />
					<Paragraph text='A ESCOLA TÉCNICA PARTICULAR se pauta no respeito e valorização do ser humano, da natureza e da liberdade de expressão como fatores fundamentais para a difusão do saber, da Solidariedade; da Liderança; da Humildade; do Companheirismo; da Transparência; da Honestidade; da Disciplina; da Coragem; da Gratidão; da Tolerância; da Empatia; da Perseverança; da Coerência; da Sustentabilidade; da Inovação e do Trabalho em Equipe.' />
				</div>
			</Style.Content>
			<Units />
			<Depositions />
			<Feedbacks />
		</Style.Container>
	);
};

export default About;
