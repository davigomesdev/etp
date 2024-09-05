//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

interface ContainerProps {
	size?: string;
	lineHeight?: string;
	align?: string;
	theme?: string;
}

export const Container = styled.p<ContainerProps>`
    width: 100%;
    text-align: ${({ align }) => (align ? align : 'center')};
    color: ${({ theme: color }) =>
			color === 'light' ? theme.colors.neutralTheme.neutral00 : theme.colors.neutralTheme.neutral80};
    font-size: ${({ size }) => (size ? size : theme.font.size.sm)};
    font-family: ${theme.font.family.poppins};
    font-weight: ${theme.font.weight.regular};
    ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight};`};
    text-justify: inter-word;
    hyphens: auto;
    word-break: break-word;
`;
