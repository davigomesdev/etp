//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

interface ContainerProps {
	width?: string;
}

export const Default = styled.button<ContainerProps>`
  width: 100%;
  ${({ width }) => width && `max-width: ${width}`};
  color: ${theme.colors.neutralTheme.neutral00};
  background-color: ${theme.colors.greenTheme.green50};

  transition: all 0.3s ease;
  font-family: ${theme.font.family.poppins};
  font-weight: ${theme.font.weight.medium};
  font-size: ${theme.font.size.sm};

  border: none;
  padding: 10px 15px;
  border-radius: 5px;

  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.greenTheme.green30};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const Outline = styled.button<ContainerProps>`
  width: 100%;
  ${({ width }) => width && `max-width: ${width}`};
  color: ${theme.colors.greenTheme.green50};
  border: 2px solid ${theme.colors.greenTheme.green50};
  background: none;

  transition: all 0.3s ease;
  font-family: ${theme.font.family.poppins};
  font-weight: ${theme.font.weight.medium};
  font-size: ${theme.font.size.sm};

  padding: 10px 15px;
  border-radius: 5px;

  cursor: pointer;

  &:hover {
    background: ${theme.colors.greenTheme.green30};
    border: 2px solid ${theme.colors.greenTheme.green30};
    color: ${theme.colors.neutralTheme.neutral00};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
