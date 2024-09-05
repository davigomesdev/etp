//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

export const Container = styled.div`
    width: 100%;
    padding: 30px 20px;
    background-color: ${theme.colors.blueTheme.blue50};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    p {
        font-weight: ${theme.font.weight.extraLight};
    }
`;
