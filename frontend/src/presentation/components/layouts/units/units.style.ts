//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

export const Container = styled.div`
    width: 100%;
    padding: 30px;
    padding-bottom: 40px;
    background-color: ${theme.colors.blueTheme.blue50};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`;

export const Content = styled.div`
    width: 100%;
    max-width: ${theme.utils.dimensions.maxContainer};
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;

    @media only screen and (max-width: 850px) {
        flex-direction: column;
    }
`;
