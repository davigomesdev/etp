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
    z-index: ${theme.utils.zIndices.modal};
    display: flex;
    align-items: start;
    justify-content: center;
    padding: 20px;
    overflow-y: auto;
`;

export const Background = styled.div`
    z-index: ${theme.utils.zIndices.modal};
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${theme.colors.neutralTheme.neutral100};
    opacity: ${theme.utils.opacity.medium};
`;

export const Scroll = styled.div`
    width: 100%;
    overflow-y: auto;
`;

export const Content = styled.div`
    margin-top: 30px;
    width: 100%;
    max-width: 500px;
    border-radius: 10px;
    background-color: ${theme.colors.neutralTheme.neutral00};
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
`;

export const Banner = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
        width: 100%;
    }
`;

export const Form = styled.form`
    width: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Buttons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
`;
