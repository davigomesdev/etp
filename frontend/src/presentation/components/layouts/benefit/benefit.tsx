//style imports
import * as Style from './benefit.style';

//props imports
import { BenefitItemProps } from './benefit.props';

const Benefit = ({ title, text, icon }: BenefitItemProps) => {
	return (
		<Style.Container>
			<Style.Icon>{icon}</Style.Icon>
			<Style.Content>
				<h1>{title}</h1>
				<p>{text}</p>
			</Style.Content>
		</Style.Container>
	);
};

export default Benefit;
