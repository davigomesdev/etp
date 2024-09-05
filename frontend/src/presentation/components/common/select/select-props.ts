//react imports
import { ChangeEvent } from 'react';

//type imports
import { OptionType } from '../../../../domain/types/option.type';

export interface SelectProps {
	label?: string;
	value: string | number;
	options?: OptionType[];
	required?: boolean;
	onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}
