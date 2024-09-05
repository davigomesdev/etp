//style imports
import * as Style from './button.style';

//props imports
import { ButtonProps } from './button.props';
import { ButtonThemeEnum } from '../../../../domain/enums/button-theme.enum';

const Button = ({ text, type, width, disabled, theme, onClick }: ButtonProps) => {
	switch (theme) {
		case ButtonThemeEnum.OUTLINE:
			return (
				<Style.Outline type={type} width={width} onClick={onClick} disabled={disabled}>
					{disabled ? 'Aguarde...' : text}
				</Style.Outline>
			);
		default:
			return (
				<Style.Default type={type} width={width} onClick={onClick} disabled={disabled}>
					{disabled ? 'Aguarde...' : text}
				</Style.Default>
			);
	}
};

export default Button;
