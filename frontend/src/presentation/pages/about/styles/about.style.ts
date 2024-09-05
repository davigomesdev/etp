//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const Content = styled.div`
    width: 100%;
    max-width: ${theme.utils.dimensions.maxContainer};
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    div{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    h1 {
        border: 1px solid ${theme.colors.blueTheme.blue50};
        border-left: none;
        border-right: none;
    }
`;
