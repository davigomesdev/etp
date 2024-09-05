//style imports
import * as Style from './app-bar.style';

//props imports
import { AppBarProps } from './app-bar.props';

//react imports
import { useState } from 'react';

//component imports
import AppMenu from '../app-menu/app-menu';

//icon imports
import { FaLaptopHouse } from 'react-icons/fa';
import { FaPeoplePulling } from 'react-icons/fa6';
import { FaPaintbrush } from 'react-icons/fa6';
import { FaGraduationCap } from 'react-icons/fa6';
import { FiMenu } from 'react-icons/fi';
import { RiDashboard3Fill } from 'react-icons/ri';

//image imports
import ETPLogoImage from '../../../assets/images/etp-logo.png';
import ModalIndication from '../modal-indication/modal-indication';

const AppBar = ({ onClickOpenMenu }: AppBarProps) => {
	const [isActive, setIsActive] = useState<boolean>(false);

	const handleToggleIsActive = (): void => {
		setIsActive(!isActive);
	};

	const handleOnClickStudentPortal = (link: string): void => {
		window.open(link, '_blank');
	};

	const handleOnClickEAD = (): void => {
		location.href = 'https://etpead.com.br/';
	};

	const handleOnClickReferralVocationalTest = (): void => {
		location.href = 'https://crm.etpeducacional.com.br/teste-vocacional';
	};

	const handleOnClickAdmin = (): void => {
		location.href = 'https://crm.etpeducacional.com.br/crm';
	};

	return (
		<>
			<Style.Container>
				<Style.Options>
					<FiMenu onClick={onClickOpenMenu} />
					<Style.Logo>
						<img src={ETPLogoImage} alt='ETP' />
					</Style.Logo>
				</Style.Options>
				<Style.Menus>
					<AppMenu title='Administrador' icon={<RiDashboard3Fill />} onClick={handleOnClickAdmin} />
					<span />
					<AppMenu
						title='Portal do aluno'
						icon={<FaGraduationCap />}
						children={
							<Style.StudantPortal className='modal'>
								<li
									onClick={() =>
										handleOnClickStudentPortal(
											'https://portal.sponteeducacional.net.br/default.aspx?CID=37479',
										)
									}
								>
									Vitória
								</li>
								<li
									onClick={() =>
										handleOnClickStudentPortal(
											'https://portal.sponteeducacional.net.br/default.aspx?CID=43426',
										)
									}
								>
									Candeias
								</li>
								<li
									onClick={() =>
										handleOnClickStudentPortal(
											'https://portal.sponteeducacional.net.br/default.aspx?CID=35695',
										)
									}
								>
									Gravatá
								</li>
							</Style.StudantPortal>
						}
					/>
					<span />
					<AppMenu title='Acessar EAD' icon={<FaLaptopHouse />} onClick={handleOnClickEAD} />
					<span />
					<AppMenu
						title='Desconto por indicação'
						icon={<FaPeoplePulling />}
						onClick={handleToggleIsActive}
					/>
					<span />
					<AppMenu
						title='Teste vocacional'
						icon={<FaPaintbrush />}
						onClick={handleOnClickReferralVocationalTest}
					/>
				</Style.Menus>
			</Style.Container>
			{isActive && <ModalIndication onClickClose={handleToggleIsActive} />}
		</>
	);
};

export default AppBar;
