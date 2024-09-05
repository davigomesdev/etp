//type imports
import { ChangeEvent } from 'react';

//enum imports
import { InputTypeEnum } from '../../../../domain/enums/input-type.enum';

export interface InputProps {
	label?: string;
	placeholder?: string;
	name?: string;
	value?: string | number;
	type?: InputTypeEnum;
	required?: boolean;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
