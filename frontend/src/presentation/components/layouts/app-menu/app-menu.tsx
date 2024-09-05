//style imports
import * as Style from './app-menu.style';

//props imports
import { AppMenuProps } from './app-menu.props';

const AppMenu = ({ title, icon, children, onClick }: AppMenuProps) => {
	return (
		<Style.Container onClick={onClick}>
			{icon}
			<p>{title}</p>
			{children && children}
		</Style.Container>
	);
};

export default AppMenu;
