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
    max-width: 700px;
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
    align-items: center;
    gap: 10px;

    h1 {
        margin-bottom: 20px;
    }

    .grid {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 200px 0fr;
        align-items: center;
        justify-content: center;
        gap: 7px;
    }

    .grid svg{
        font-size: 35px;
        cursor: pointer;
        margin-top: 23px;
    }


    span {
        width: 100%;
        height: 1px;
        background-color: ${theme.colors.neutralTheme.neutral30};
    }

    h2 {
        font-family: ${theme.font.family.poppins};
        font-size: ${theme.font.size.md};
        color: ${theme.colors.greenTheme.green50};
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
    }

    .grid button{
        display: none;
    }

    @media (max-width: 600px) {
        .grid{
            grid-template-columns: 1fr;
            justify-content: center;
            align-items: center;
        }

        .grid svg{
            display: none;
        }

        .grid button{
            display: block;
            margin-bottom: 20px;
        }
    }
`;

export const Inputs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`;

export const Buttons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
`;
