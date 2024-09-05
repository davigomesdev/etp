//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

export const Container = styled.div`
    width: 100%;
    padding: 20px;
    background-color: ${theme.colors.blueTheme.blue50};
    display: flex;
    justify-content: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: ${theme.utils.dimensions.maxContainer};
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 1000px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
    }
`;
