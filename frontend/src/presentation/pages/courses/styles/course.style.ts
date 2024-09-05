//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
`;

export const Name = styled.div`
    padding: 20px;
`;

export const Data = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    p {
        flex: 1;
        font-size: ${theme.font.size.md};
        font-family: ${theme.font.family.poppins};
    }

    @media (max-width: 850px) {
        flex-direction: column;

        p {
            text-align: center;
        }
    }
`;

export const Topics = styled.ul`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    li {
        width: 100%;
        padding: 5px;
        border-radius: 5px;
        text-align: center;
        border: 2px solid ${theme.colors.blueTheme.blue50};
        cursor: pointer;
        transition: all .3s ease;
    }

    li h1 {
        width: 100%;
        font-size: ${theme.font.size['2xl']};
        font-family: ${theme.font.family.poppins};
        color: ${theme.colors.blueTheme.blue50};
    }

    li.active,
    li:hover {
        background-color: ${theme.colors.blueTheme.blue50};
    }

    li.active h1,
    li:hover h1 {
        color: ${theme.colors.neutralTheme.neutral00};
    }
`;

export const Info = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 30px;

    @media only screen and (max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Modules = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const Module = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;

    h1 {
        width: 100%;
        padding: 0px 10px;
        font-size: ${theme.font.size['2xl']};
        font-family: ${theme.font.family.poppins};
        color: ${theme.colors.blueTheme.blue50};
        border: 2px solid ${theme.colors.blueTheme.blue50};
    }

    li {
        display: flex;
        align-items: center;
        gap: 10px;
        color: ${theme.colors.blueTheme.blue50};
        padding-left: 5px;
    }
`;
