//styled imports
import styled from 'styled-components';
import { theme } from '../../../themes/theme';

export const Container = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;

    img {
        width: 110%;
        object-fit: cover;
        transition: scale 0.3s ease;
    }

    &:hover img {
        scale: 1.15;
    }

    svg {
        color: ${theme.colors.neutralTheme.neutral00};
        position: absolute;
        font-size: 50px;
    }
`;
