//style imports
import * as Style from './select.style';

//props imports
import { SelectProps } from './select-props';

const Select = ({ label, value, options, required, onChange }: SelectProps) => {
	return (
		<Style.Group>
			<Style.Label>
				{label && <p>{label}</p>}
				<Style.Container value={value} onChange={onChange} required={required}>
					{options &&
						options.map((option, index) => (
							<option key={index} value={option.value}>
								{option.name}
							</option>
						))}
				</Style.Container>
			</Style.Label>
		</Style.Group>
	);
};

export default Select;
