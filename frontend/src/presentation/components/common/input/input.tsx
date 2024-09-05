//style imports
import * as Style from './input.style';

//props imports
import { InputProps } from './input-props';

const Input = ({ label, placeholder, name, value, type, required, onChange }: InputProps) => {
	return (
		<Style.Group>
			<Style.Label>
				{label && <p>{label}</p>}
				<Style.Container
					name={name}
					value={value}
					placeholder={placeholder}
					type={type}
					onChange={onChange}
					required={required}
				/>
			</Style.Label>
		</Style.Group>
	);
};

export default Input;
