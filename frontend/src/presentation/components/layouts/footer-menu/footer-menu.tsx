//styles imports
import * as Style from './footer-menu.style';

//props imports
import { NavMenuProps } from './footer-menu.props';

//react-router imports
import { NavLink } from 'react-router-dom';

const FooterMenu = ({ url, title }: NavMenuProps) => {
	return (
		<Style.Container>
			<NavLink to={url}>
				<p>{title}</p>
				<span />
			</NavLink>
		</Style.Container>
	);
};

export default FooterMenu;
