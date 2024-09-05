//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

export const Container = styled.div`
    width: 300px;
    height: 100%;
    padding: 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    border: 2px solid ${theme.colors.greenTheme.green50};

    svg {
        font-size: 30px;
        color: ${theme.colors.neutralTheme.neutral30};
        z-index: 1;
    }
`;

export const Info = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Photo = styled.div`
    width: 50px;
    height: 50px;
    min-width: 50px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    border: 3px solid ${theme.colors.blueTheme.blue50};
    overflow: hidden;

    img {
        width: 100%;
    }
`;
