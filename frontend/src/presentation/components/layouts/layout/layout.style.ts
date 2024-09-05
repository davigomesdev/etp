//styled imports
import styled from 'styled-components';
import { theme } from '../../../themes/theme';

export const Container = styled.div`
    width: 100%;
`;

export const Phone = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: ${theme.utils.zIndices.loading};
    background-color: #25D366;
    border-radius: 100%;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
        font-size: 30px;
        color: ${theme.colors.neutralTheme.neutral00};
    }
`;
