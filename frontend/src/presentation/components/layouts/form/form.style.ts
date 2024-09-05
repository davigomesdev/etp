//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

export const Container = styled.div`
    width: 100%;
    padding: 20px;
    background-color: ${theme.colors.blueTheme.blue50};
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
`;

export const Content = styled.div`
    width: 100%;
    max-width: ${theme.utils.dimensions.maxContainer};
    padding: 30px;
    border-radius: 10px;
    background-color: ${theme.colors.neutralTheme.neutral00};
    display: flex;
    gap: 20px;

    @media (max-width: 950px) {
        flex-direction: column;
        max-width: 500px;
    }
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 15px;

    @media (max-width: 950px) {
        button {
            max-width: 100%;
            margin-top: 20px;
        }
    }
`;

export const Inputs = styled.div`
    width: 100%;
    display: flex;
    gap: 15px;
    
    .column {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 10px;
    }

    @media (max-width: 950px) {
        flex-direction: column;
    }
`;

export const Offer = styled.div`
    width: 100%;
    max-width: 390px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 950px) {
        max-width: 100%;
    }
`;
