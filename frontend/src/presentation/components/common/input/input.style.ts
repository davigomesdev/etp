//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

export const Group = styled.div`
  width: 100%;
`;

export const Container = styled.input`
  width: 100%;
  padding: 10px 15px;
  border-radius: 5px;
  outline: none;
  border: 2px solid ${theme.colors.neutralTheme.neutral30};
  font-size: ${theme.font.size.sm};
  font-weight: ${theme.font.weight.light};
  font-family: ${theme.font.family.poppins};
  color: ${theme.colors.neutralTheme.neutral80};

  &:focus {
    border: 2px solid ${theme.colors.blueTheme.blue50};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Label = styled.label`
  font-size: ${theme.font.size.sm};
  font-weight: ${theme.font.weight.regular};
  font-family: ${theme.font.family.poppins};
  color: ${theme.colors.neutralTheme.neutral80};
  display: flex;
  flex-direction: column;
  gap: 3px;

  input:focus & {
    color: ${theme.colors.neutralTheme.neutral10};
  }
`;
