//style imports
import * as Style from './modal-indication.style';

//props imports
import { ModalIndicationProps } from './modal-indication.props';

//react imports
import { ChangeEvent, useCallback, useEffect, useState, useRef } from 'react';

//enum imports
import { ButtonThemeEnum } from '../../../../domain/enums/button-theme.enum';
import { ButtonTypeEnum } from '../../../../domain/enums/button-type.enum';
import { TextThemeEnum } from '../../../../domain/enums/text-theme.enum';
import { InputTypeEnum } from '../../../../domain/enums/input-type.enum';

// type imports
import type { CreateIndicationDTO } from '../../../../infrastructure/api/services/dtos/create-indication.dto';

//store imports
import { useCreateIndicationStore } from '../../../../application/stores/api/indication/create-indication.store';

//icon imports
import { CiCircleRemove } from 'react-icons/ci';
import { FaPlus } from 'react-icons/fa';

//image imports
import Banner from '../../../assets/images/figures/image-indicacao.png';

//component imports
import Title from '../../common/title/title';
import Input from '../../common/input/input';
import Select from '../../common/select/select';
import Button from '../../common/button/button';

const ModalIndication = ({ onClickClose }: ModalIndicationProps) => {
	const content = useRef<HTMLDivElement>(null);
	const { success, isLoading, execute, reset } = useCreateIndicationStore();

	const [name, setName] = useState<string>('');
	const [unit, setUnit] = useState<string>('Vitória');
	const [registrationNumber, setRegistrationNumber] = useState<string>('');

	const [inputs, setInputs] = useState([{ id: 1 }]);

	const addInput = useCallback(() => {
		setInputs([...inputs, { id: inputs.length + 1 }]);
	}, [inputs]);

	const removeInput = useCallback(
		(idToRemove: number) => {
			setInputs(inputs.filter((input) => input.id !== idToRemove));
		},
		[inputs],
	);

	const renderIndicatedInputs = () => {
		return inputs.map((input) => (
			<div className='grid' key={input.id}>
				<Input
					label='Nome do indicado'
					placeholder='Nome do seu amigo'
					required
					name={`nome-${input.id}`}
				/>
				<Input
					label='Telefone do indicado'
					placeholder='(00) 0000-0000'
					required
					name={`telefone-${input.id}`}
				/>
				{inputs.length > 1 && <CiCircleRemove onClick={() => removeInput(input.id)} />}
				{inputs.length > 1 && (
					<Button
						text='Remover amigo'
						theme={ButtonThemeEnum.OUTLINE}
						onClick={() => removeInput(input.id)}
					/>
				)}
			</div>
		));
	};

	const handleOnChangeSetName = (e: ChangeEvent<HTMLInputElement>): void => {
		setName(e.target.value);
	};

	const handleOnChangeSetRegistrationNumber = (e: ChangeEvent<HTMLInputElement>): void => {
		setRegistrationNumber(e.target.value);
	};

	const handleOnChangeSetUnit = (e: ChangeEvent<HTMLSelectElement>): void => {
		setUnit(e.target.value);
	};

	const handleOnSubmit = (e: any): void => {
		e.preventDefault();
		reset();
		const formattedValues = inputs.map((input) => {
			const nomeInput = e.target[`nome-${input.id}`].value;
			const telefoneInput = e.target[`telefone-${input.id}`].value;
			return `${nomeInput}/${telefoneInput}`;
		});

		const indications = formattedValues.join(',');

		const body: CreateIndicationDTO = {
			name: name,
			registration_number: registrationNumber,
			unit: unit,
			indications: indications,
		};

		execute(body);
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

	useEffect(() => {
		if (success) {
			onClickClose();
			reset();
		}
	}, [success]);

	useEffect(() => {
		if (inputs.length === 0) addInput();
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
						<Title
							text='Indique 1 amigo e ganhe R$30,00, 2 amigos R$60,00 e 3 amigos R$100,00'
							width='450px'
							theme={TextThemeEnum.DARK}
						/>
						<div className='grid'>
							<Input
								label='Nome completo'
								placeholder='Seu nome'
								value={name}
								onChange={handleOnChangeSetName}
								required
							/>
							<Input
								label='Nº da matrícula'
								value={registrationNumber}
								onChange={handleOnChangeSetRegistrationNumber}
								type={InputTypeEnum.NUMBER}
								placeholder='Matrícula'
								required
							/>
						</div>
						<Select
							label='Sua unidade'
							value={unit}
							options={[
								{ name: 'Vitória', value: 'Vitória' },
								{ name: 'Jaboatão', value: 'Jaboatão' },
								{ name: 'Gravatá', value: 'Gravatá' },
							]}
							onChange={handleOnChangeSetUnit}
							required
						/>
						<span />
						<Style.Inputs>{renderIndicatedInputs()}</Style.Inputs>
						<h2 onClick={addInput}>
							<FaPlus />
							Adicionar mais um amigo
						</h2>
						<span />
						<Style.Buttons>
							<Button text='Indicar agora' disabled={isLoading} />
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

export default ModalIndication;
