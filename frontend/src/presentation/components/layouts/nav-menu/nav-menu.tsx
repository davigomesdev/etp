//styles imports
import * as Style from './nav-menu.style';

//props imports
import { NavMenuProps } from './nav-menu.props';

//react-router imports
import { NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import { PageUrlEnum } from '../../../../domain/enums/page-url.enum';

const NavMenu = ({ url, to, title, onClick }: NavMenuProps) => {
	const navigate = useNavigate();

	const handleOnClick = (): void => {
		onClick();
		if (location.pathname !== '/') {
			navigate(PageUrlEnum.VITORIA);
		}
	};

	if (to)
		return (
			<Style.Container>
				<Link to={to} spy={true} smooth={true} duration={500} onClick={handleOnClick}>
					<p>{title}</p>
					<span />
				</Link>
			</Style.Container>
		);

	if (url !== undefined)
		return (
			<Style.Container>
				<NavLink to={url} onClick={onClick}>
					<p>{title}</p>
					<span />
				</NavLink>
			</Style.Container>
		);
};

export default NavMenu;
