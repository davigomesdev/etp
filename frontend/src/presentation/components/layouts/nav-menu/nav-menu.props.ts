//enum imports
import { PageUrlEnum } from '../../../../domain/enums/page-url.enum';

export interface NavMenuProps {
	url?: PageUrlEnum;
	to?: string;
	title: string;
	onClick: () => void;
}
