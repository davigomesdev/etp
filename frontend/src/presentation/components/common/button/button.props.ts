//enum imports
import { ButtonThemeEnum } from '../../../../domain/enums/button-theme.enum';
import { ButtonTypeEnum } from '../../../../domain/enums/button-type.enum';

export interface ButtonProps {
	text: string;
	type?: ButtonTypeEnum;
	width?: string;
	disabled?: boolean;
	theme?: ButtonThemeEnum;
	onClick?: () => void;
}
