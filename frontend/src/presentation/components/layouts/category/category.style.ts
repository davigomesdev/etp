//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

//react imports
import { Link } from 'react-scroll';

export const Container = styled(Link)`
    flex: 1;
    min-width: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 35px 20px;
    border: 2px solid ${theme.colors.blueTheme.blue50};
    border-radius: 15px;
    transition: transform .3s ease;
    cursor: pointer;

    &:hover {
        border: 2px solid ${theme.colors.greenTheme.green50};
        transform: translateY(-10px);
    }

    &:hover span {
        background-color: ${theme.colors.blueTheme.blue50};
    }
`;

export const Icon = styled.span`
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.greenTheme.green50};
    border-radius: 10px;
    transition: all 0.3s ease;

    svg {
        font-size: 30px;
        color: ${theme.colors.neutralTheme.neutral00};
    }
`;
