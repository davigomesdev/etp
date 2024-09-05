//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

//react router imports
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    width: 100%;
    max-width: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;

    img {
        width: 100%;
        transition: scale .3s ease;
    }

    &:hover img {
        scale: 1.05;
    }

    &:hover span {
        right: -30px;
        transform: translateY(50px);
        z-index: 10;
    }
`;

export const Content = styled.span`
    padding: 20px;
    width: 200px;
    background-color: ${theme.colors.greenTheme.green50};
    position: absolute;
    right: -20px;
    bottom: 30px;
    transition: all .3s ease;
`;
