//style imports
import * as Style from './unit.style';

//props imports
import { UnitProps } from './unit.props';

//enum imports
import { TextThemeEnum } from '../../../../domain/enums/text-theme.enum';

//component imports
import Title from '../../common/title/title';
import Paragraph from '../../common/paragraph/paragraph';
import { TextAlignEnum } from '../../../../domain/enums/text-align.enum';
import { theme } from '../../../themes/theme';

const Unit = ({ name, to, location, image }: UnitProps) => {
	return (
		<Style.Container to={to}>
			<img src={image} alt={name} />
			<Style.Content>
				<Title text={name} align={TextAlignEnum.LEFT} />
				<Paragraph
					text={location}
					theme={TextThemeEnum.LIGHT}
					lineHeight='17px'
					align={TextAlignEnum.LEFT}
					size={theme.font.size.xs}
				/>
			</Style.Content>
		</Style.Container>
	);
};

export default Unit;
