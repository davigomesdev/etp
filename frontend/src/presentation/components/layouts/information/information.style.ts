//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

export const Container = styled.div`
    width: 100%;
    background-color: ${theme.colors.blueTheme.blue50};
    display: flex;
    justify-content: center;
    h1 {
        position: relative;
        z-index: 1;
    }
`;

export const Content = styled.div`
    width: 100%;
    max-width: ${theme.utils.dimensions.maxContainer};
    display: flex;
    flex-direction: column;
    gap: 25px;
    position: relative;
    padding: 40px;
    padding-bottom: 60px;

    h1 {
        line-height: 27px;
    }
`;

export const List = styled.ul`
    width: 100%;
    display: flex;
    align-items: start;
    gap: 20px;
    position: relative;
    z-index: 1;

    li {
        width: 100%;
        max-width: 270px;
        padding: 30px;
        padding-top: 15px;
        background-color: ${theme.colors.blueTheme.blue50};
        border: 1px solid ${theme.colors.blueTheme.blue90};
        box-shadow: 4px 4px 0 ${theme.colors.blueTheme.blue90};
        display: flex;
        flex-direction: column;
        border-radius: 15px;
        gap: 5px;
    }

    li h1 {
        color: ${theme.colors.greenTheme.green30};
    }
    
    li svg {
        font-size: 30px;
        color: ${theme.colors.greenTheme.green30};
    }

    @media only screen and (max-width: 850px) {
        flex-direction: column;
    }

    @media only screen and (max-width: 650px) {
        li {
            max-width: 100%;
        }
    }
`;

export const Image = styled.div`
    width: 380px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 50px;
    z-index: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media only screen and (max-width: 650px) {
        width: 100%;
        right: 0;
        opacity: ${theme.utils.opacity.semiTransparent};
    }
`;
