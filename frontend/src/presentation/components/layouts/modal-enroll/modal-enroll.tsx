//style imports
import * as Style from './modal-enroll.style';

//props imports
import { ModalEnrollProps } from './modal-enroll.props';

//enum imports
import { ButtonThemeEnum } from '../../../../domain/enums/button-theme.enum';
import { ButtonTypeEnum } from '../../../../domain/enums/button-type.enum';

//react imports
import { ChangeEvent, FormEvent, useEffect, useState, useRef } from 'react';

//dto imports
import { CreateRecordDTO } from '../../../../infrastructure/api/services/dtos/create-record.dto';

//store imports
import { useCreateRecordStore } from '../../../../application/stores/api/record/create-record.store';

//image imports
import Banner from '../../../assets/images/banners/desktop/banner1.desktop.png';

//component imports
import Input from '../../common/input/input';
import Select from '../../common/select/select';
import Button from '../../common/button/button';

const ModalEnroll = ({ onClickClose }: ModalEnrollProps) => {
	const content = useRef<HTMLDivElement>(null);
	const { isLoading, success, execute, reset } = useCreateRecordStore();

	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const [unit, setUnit] = useState<string>('vitória');
	const [course, setCourse] = useState<string>('Mecânica Industrial');

	const handleOnChangeSetName = (e: ChangeEvent<HTMLInputElement>): void => {
		setName(e.target.value);
	};

	const handleOnChangeSetEmail = (e: ChangeEvent<HTMLInputElement>): void => {
		setEmail(e.target.value);
	};

	const handleOnChangeSetPhone = (e: ChangeEvent<HTMLInputElement>): void => {
		setPhone(e.target.value);
	};

	const handleOnChangeSetUnit = (e: ChangeEvent<HTMLSelectElement>): void => {
		setUnit(e.target.value);
	};

	const handleOnChangeSetCourse = (e: ChangeEvent<HTMLSelectElement>): void => {
		setCourse(e.target.value);
	};

	const handleClickOutside = (event: MouseEvent | TouchEvent): void => {
		if (content.current && !content.current.contains(event.target as Node)) {
			onClickClose();
		}
	};

	const handleOnSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		reset();
		const body: CreateRecordDTO = { name, email, phone, unit, course };

		execute(body);
	};

	useEffect(() => {
		if (success) {
			if (unit === 'vitória')
				window.open(
					'https://api.whatsapp.com/send/?phone=5581985823086&text&type=phone_number&app_absent=0',
					'_blank',
				);
			if (unit === 'jaboatão')
				window.open(
					'https://api.whatsapp.com/send/?phone=5581973295711&text&type=phone_number&app_absent=0',
					'_blank',
				);
			if (unit === 'gravatá')
				window.open(
					'https://api.whatsapp.com/send/?phone=5581993108974&text&type=phone_number&app_absent=0',
					'_blank',
				);

			reset();
		}
	}, [success]);

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
					<Style.Banner>
						<img src={Banner} alt='banner' />
					</Style.Banner>
					<Style.Form onSubmit={handleOnSubmit}>
						<Input
							label='Nome Completo'
							placeholder='Digite o seu nome'
							value={name}
							onChange={handleOnChangeSetName}
							required
						/>
						<Input
							label='Email'
							placeholder='Digite o seu email'
							value={email}
							onChange={handleOnChangeSetEmail}
							required
						/>
						<Input
							label='Telefone'
							placeholder='Digite o seu nome'
							value={phone}
							onChange={handleOnChangeSetPhone}
							required
						/>
						<Select
							label='Unidade / Região'
							value={unit}
							options={[
								{ name: 'Vitória', value: 'vitória' },
								{ name: 'Jaboatão', value: 'jaboatão' },
								{ name: 'Gravatá', value: 'gravatá' },
							]}
							onChange={handleOnChangeSetUnit}
							required
						/>
						<Select
							label='Curso desejado'
							value={course}
							options={[
								{ name: 'Mecânica Industrial', value: 'Mecânica Industrial' },
								{ name: 'Instrumentação Cirúrgica', value: 'Instrumentação Cirúrgica' },
								{ name: 'Refrigeração e Climatização', value: 'Refrigeração e Climatização' },
								{ name: 'Eletricista Profissional', value: 'Eletricista Profissional' },
								{ name: 'Mecânica de Moto', value: 'Mecânica de Moto' },
								{ name: 'Eletrotécnica', value: 'Eletrotécnica' },
								{ name: 'Automação Industrial', value: 'Automação Industrial' },
								{ name: 'Soldagem', value: 'Soldagem' },
								{ name: 'Enfermagem', value: 'Enfermagem' },
								{ name: 'APH', value: 'APH' },
								{ name: 'Flebotomia', value: 'Flebotomia' },
								{ name: 'Estética', value: 'Estética' },
								{ name: 'Radiologia', value: 'Radiologia' },
								{ name: 'Administração', value: 'Administração' },
								{ name: 'Logística', value: 'Logística' },
							]}
							onChange={handleOnChangeSetCourse}
							required
						/>
						<Style.Buttons>
							<Button text='Enviar' disabled={isLoading} />
							<Button
								text='Fechar e voltar'
								type={ButtonTypeEnum.BUTTON}
								theme={ButtonThemeEnum.OUTLINE}
								onClick={onClickClose}
							/>
						</Style.Buttons>
					</Style.Form>
				</Style.Content>
			</Style.Container>
		</>
	);
};

export default ModalEnroll;
