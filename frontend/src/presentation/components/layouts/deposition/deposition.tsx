//style imports
import * as Style from './deposition.style';

//props imports
import { DepositionProps } from './deposition.props';

//icon imports
import { FaCirclePlay } from 'react-icons/fa6';

const Deposition = ({ image, onClick }: DepositionProps) => {
	return (
		<Style.Container onClick={onClick}>
			<img src={image} alt='Deposition' />
			<FaCirclePlay />
		</Style.Container>
	);
};

export default Deposition;
