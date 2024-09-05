//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

interface ContainerProps {
	size?: string;
	align?: string;
	width?: string;
	theme?: string;
}

export const Container = styled.h1<ContainerProps>`
    width: 100%;
    line-height: 20px;
    max-width: ${({ width }) => (width ? width : '100%')};
    text-align: ${({ align }) => (align ? align : 'center')};
    color: ${({ theme: color }) =>
			color === 'dark' ? theme.colors.neutralTheme.neutral80 : theme.colors.neutralTheme.neutral00};
    font-size: ${({ size }) => (size ? size : theme.font.size.lg)};
    font-family: ${theme.font.family.poppins};
    font-weight: ${theme.font.weight.semibold};
`;
