//style imports
import * as Style from './modal-indication.style';

//props imports
import { ModalIndicationProps } from './modal-indication.props';

import { FaWhatsapp } from 'react-icons/fa';
import { useEffect, useRef } from 'react';

const ModalPhone = ({ onClickClose }: ModalIndicationProps) => {
	const content = useRef<HTMLDivElement>(null);

	const handleOnClickPhone = (link: string): void => {
		window.open(link, '_blank');
	};

	const handleClickOutside = (event: MouseEvent | TouchEvent): void => {
		if (content.current && !content.current.contains(event.target as Node)) {
			onClickClose();
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		document.addEventListener('touchstart', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('touchstart', handleClickOutside);
		};
	}, []);

	return (
		<>
			<Style.Background />
			<Style.Container>
				<Style.Content ref={content}>
					<ul>
						<li
							onClick={() =>
								handleOnClickPhone(
									'https://api.whatsapp.com/send/?phone=5581985823086&text&type=phone_number&app_absent=0',
								)
							}
						>
							<FaWhatsapp />
							<p>Unidade de Vitória</p>
						</li>
						<li
							onClick={() =>
								handleOnClickPhone(
									'https://api.whatsapp.com/send/?phone=5581973295711&text&type=phone_number&app_absent=0',
								)
							}
						>
							<FaWhatsapp />
							<p>Unidade de Jaboatão</p>
						</li>
						<li
							onClick={() =>
								handleOnClickPhone(
									'https://api.whatsapp.com/send/?phone=5581993108974&text&type=phone_number&app_absent=0',
								)
							}
						>
							<FaWhatsapp />
							<p>Unidade de Gravatá</p>
						</li>
					</ul>
				</Style.Content>
			</Style.Container>
		</>
	);
};

export default ModalPhone;
