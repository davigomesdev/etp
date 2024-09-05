//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${theme.utils.zIndices.loading};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    overflow-y: auto;
`;

export const Background = styled.div`
    z-index: ${theme.utils.zIndices.loading};
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${theme.colors.neutralTheme.neutral100};
    opacity: ${theme.utils.opacity.medium};
`;

export const Content = styled.div`
    margin-top: 30px;
    width: 100%;
    max-width: 350px;
    border-radius: 10px;
    background-color: ${theme.colors.neutralTheme.neutral00};
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;

    ul {
        padding: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    li {
        width: 100%;
        display: flex;
        align-items: center;
        border: 1px solid #25D366;
        padding: 7px;
        border-radius: 7px;
        cursor: pointer;
    }

    p {
        width: 100%;
        text-align: center;
        font-size: ${theme.font.size.lg};
        font-family: ${theme.font.family.poppins};
    }

    svg {
        font-size: 30px;
        color: #25D366;
    }
`;
