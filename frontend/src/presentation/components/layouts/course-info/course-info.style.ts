//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

export const Container = styled.div`
    flex: 1;
    min-width: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 35px 20px;
    border-radius: 15px;
    transition: transform .3s ease;
`;

export const Icon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin-bottom: 10px;
    transition: all 0.3s ease;

    svg {
        font-size: 70px;
        color: ${theme.colors.greenTheme.green50};
    }
`;
