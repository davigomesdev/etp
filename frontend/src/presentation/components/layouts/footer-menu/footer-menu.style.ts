//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    font-family: ${theme.font.family.poppins};
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.size.md};
    color: ${theme.colors.neutralTheme.neutral00};
  }

  a span {    
    height: 2px;
    width: 100%;
    display: none;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: ${theme.colors.greenTheme.green30};
  }

  a.active {    
    display: block;
    color: ${theme.colors.greenTheme.green50};
  }

  a.active span {    
    display: block;
  }

  a p {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
