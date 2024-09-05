//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

interface ContainerProps {
	isActive: boolean;
}

export const Container = styled.div<ContainerProps>`
    width: 100%;
    height: 60px;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.neutralTheme.neutral00};
    position: sticky;
    top: 0;
    z-index: ${theme.utils.zIndices.overlay};
    transition: all 0.3s ease;

    @media (max-width: 900px) {
        position: fixed;
        height: 100%;
        padding: 20px;
        left: ${({ isActive }) => (isActive ? '0px' : '-100%')};

        button {
            max-width: 200px;
        }
    }
`;

export const Content = styled.div`
    width: 100%;
    max-width: ${theme.utils.dimensions.maxContainer};
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 900px) {
        position: fixed;
        flex-direction: column;
        gap: 20px;
    }
`;

export const Logo = styled.div`
    width: 75px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
    }
`;

export const Menus = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;

    @media (max-width: 900px) {
        flex-direction: column;
        width: 100%;
        gap: 0;
    }
`;

export const Close = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    @media (min-width: 900px) {
        display: none;
    }
`;
