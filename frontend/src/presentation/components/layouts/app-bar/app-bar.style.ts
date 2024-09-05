//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

export const Container = styled.div`
    width: 100%;
    height: 40px;
    background-color: ${theme.colors.blueTheme.blue50};
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 900px) {
        padding: 20px;
        gap: 25px;
        height: 60px;
        background-color: ${theme.colors.neutralTheme.neutral00};
        justify-content: space-between;
        position: sticky;
        top: 0;
        z-index: ${theme.utils.zIndices.overlay};
    }
`;

export const Options = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;

    svg {
        font-size: 25px;
        cursor: pointer;
    }

    @media (min-width: 900px) {
        display: none;
    }
`;

export const Logo = styled.div`
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
    }
`;

export const Menus = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    span {
        width: 1px;
        height: 20px;
        background-color: ${theme.colors.neutralTheme.neutral00};
    }

    @media (max-width: 1030px) {
        gap: 20px;

        span {
            display: none;
        }
    }

    @media (max-width: 350px) {
        gap: 10px;
    }
`;

export const StudantPortal = styled.ul`
    width: 200px;
    height: 100px;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.blueTheme.blue50};
    gap: 5px;
    position: absolute;
    padding: 10px;
    top: 20px;
    z-index: ${theme.utils.zIndices.loading};

    li:hover {
        background-color: ${theme.colors.blueTheme.blue60};
    }

    @media (max-width: 900px) {
        top: 41px;
    }
`;
