//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

export const Container = styled.div`
    width: 100%;
    max-width: ${theme.utils.dimensions.maxContainer};
    padding: 0 25px;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 30px;

    @media only screen and (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 560px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
