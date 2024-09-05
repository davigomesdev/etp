//enum imports
import { TextAlignEnum } from '../../../../domain/enums/text-align.enum';
import { TextThemeEnum } from '../../../../domain/enums/text-theme.enum';

export interface TitleProps {
	text: string;
	size?: string;
	lineHeight?: string;
	align?: TextAlignEnum;
	theme?: TextThemeEnum;
}
