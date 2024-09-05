//style imports
import * as Style from './form.style';

//theme imports
import { theme } from '../../../themes/theme';

//react imports
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

//dto imports
import { CreateRecordDTO } from '../../../../infrastructure/api/services/dtos/create-record.dto';

//store imports
import { useCreateRecordStore } from '../../../../application/stores/api/record/create-record.store';

//image imports
import OfferImage from '../../../assets/images/figures/offer.png';

//component imports
import Input from '../../common/input/input';
import Button from '../../common/button/button';
import Title from '../../common/title/title';
import Select from '../../common/select/select';

const Form = () => {
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

	return (
		<Style.Container>
			<Title text='Entre em contato' size={theme.font.size['2xl']} />
			<Style.Content>
				<Style.Offer>
					<img src={OfferImage} alt='Oferta' />
				</Style.Offer>
				<Style.Form onSubmit={handleOnSubmit}>
					<Style.Inputs>
						<div className='column'>
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
						</div>
						<div className='column'>
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
						</div>
					</Style.Inputs>
					<Button text='Enviar' width='200px' disabled={isLoading} />
				</Style.Form>
			</Style.Content>
		</Style.Container>
	);
};

export default Form;
