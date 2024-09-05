//style imports
import * as Style from './navbar.style';

//react imports
import { useState } from 'react';

//enum imports
import { PageUrlEnum } from '../../../../domain/enums/page-url.enum';
import { ButtonThemeEnum } from '../../../../domain/enums/button-theme.enum';

//image imports
import ETPLogoImage from '../../../assets/images/etp-logo.png';

//component imports
import AppBar from '../app-bar/app-bar';
import NavMenu from '../nav-menu/nav-menu';
import Button from '../../common/button/button';
import ModalEnroll from '../modal-enroll/modal-enroll';

const Navbar = () => {
	const [isActive, setIsActive] = useState<boolean>(false);
	const [isActiveEnroll, setIsActiveEnroll] = useState<boolean>(false);

	const handleToggleIsActive = (): void => {
		setIsActive(!isActive);
	};

	const handleToggleIsActiveEnroll = (): void => {
		setIsActiveEnroll(!isActiveEnroll);
	};

	return (
		<>
			<AppBar onClickOpenMenu={handleToggleIsActive} />
			<Style.Container isActive={isActive}>
				<Style.Content>
					<Style.Logo>
						<img src={ETPLogoImage} alt='ETP' />
					</Style.Logo>
					<Style.Menus>
						<NavMenu url={PageUrlEnum.HOME} title='Inicial' onClick={handleToggleIsActive} />
						<NavMenu url={PageUrlEnum.COURSES} title='Cursos' onClick={handleToggleIsActive} />
						<NavMenu to='UNITS' title='Unidades' onClick={handleToggleIsActive} />
						<NavMenu url={PageUrlEnum.BLOG} title='Blog' onClick={handleToggleIsActive} />
						<NavMenu url={PageUrlEnum.ABOUT} title='Sobre' onClick={handleToggleIsActive} />
					</Style.Menus>
					<Button text='Seja nosso aluno!' width='200px' onClick={handleToggleIsActiveEnroll} />
					<Style.Close>
						<Button
							text='Fechar menu'
							width='200px'
							theme={ButtonThemeEnum.OUTLINE}
							onClick={handleToggleIsActive}
						/>
					</Style.Close>
				</Style.Content>
			</Style.Container>
			{isActiveEnroll && <ModalEnroll onClickClose={handleToggleIsActiveEnroll} />}
		</>
	);
};

export default Navbar;
