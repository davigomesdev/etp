//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: ${theme.utils.dimensions.maxContainer};
    padding: 30px;
    display: flex;
    gap: 20px;

    @media (max-width: 750px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const DisplayMap = styled.iframe`
    border: none;
    flex: 1;
    min-height: 300px;
`;

export const Data = styled.div`
    padding: 20px;
    background-color: ${theme.colors.neutralTheme.neutral00};
    border: 2px solid ${theme.colors.blueTheme.blue50};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;   
    width: 100%;
    max-width: 350px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    h1 {
        margin-bottom: 20px;
    }
`;

export const Hourly = styled.div`
    width: 100%;
    background-color: ${theme.colors.neutralTheme.neutral10};
    border-radius: 10px;
    padding-bottom: 10px;
    overflow: hidden;

    h1 {
        background-color: ${theme.colors.blueTheme.blue50};
        padding: 5px;
    }
`;
