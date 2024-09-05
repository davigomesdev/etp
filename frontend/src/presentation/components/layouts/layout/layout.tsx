//style imports
import * as Style from './layout.style';

//props imports
import { LayoutProps } from './layout.props';

import { FaWhatsapp } from 'react-icons/fa';

//component improts
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import Form from '../form/form';
import ModalPhone from '../modal-phone/modal-phone';
import { useState } from 'react';

const Layout = ({ children }: LayoutProps) => {
	const [isActive, setIsActive] = useState<boolean>(false);

	const handleToggleIsActive = (): void => {
		setIsActive(!isActive);
	};

	return (
		<>
			<Style.Container>
				<Navbar />
				{children}
				<Form />
				<Footer />
				<Style.Phone onClick={handleToggleIsActive}>
					<FaWhatsapp />
				</Style.Phone>
			</Style.Container>
			{isActive && <ModalPhone onClickClose={handleToggleIsActive} />}
		</>
	);
};

export default Layout;
