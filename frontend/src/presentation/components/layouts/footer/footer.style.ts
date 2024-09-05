//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

export const Container = styled.div`
    width: 100%;
    padding: 20px;
    background-color: ${theme.colors.blueTheme.blue50};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const Content = styled.div`
    width: 100%;
    max-width: ${theme.utils.dimensions.maxContainer};
    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    @media (max-width: 850px) {
        flex-direction: column;
        gap: 40px;
    }
`;

export const Logo = styled.div`
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
    }

    @media (max-width: 600px) {
        width: 160px;
    }
`;

export const Menus = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;

    @media (max-width: 600px) {
        flex-direction: column;
        gap: 25px;
    }
`;

export const Social = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-direction: column;

    svg {
        font-size: 40px;
        color: ${theme.colors.neutralTheme.neutral00};
        cursor: pointer;
    }

    span {
        cursor: pointer;
    }
`;

export const Copy = styled.div`
    width: 100%;
    padding: 20px;
    background-color: ${theme.colors.blueTheme.blue60};
`;
