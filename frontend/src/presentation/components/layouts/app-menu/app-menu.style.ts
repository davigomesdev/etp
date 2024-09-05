//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

export const Container = styled.button`
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-family: ${theme.font.family.poppins};
    font-weight: ${theme.font.weight.light};
    font-size: ${theme.font.size.sm};
    color: ${theme.colors.neutralTheme.neutral00};
    cursor: pointer;
    position: relative;

    svg {
        font-size: 15px;
    }

    @media (max-width: 900px) {
        p {
            display: none;
        }

        svg {
            font-size: 23px;
            color: ${theme.colors.neutralTheme.neutral80};
        }
    }

    .modal {
        display: none;
    }

    &:hover .modal, .modal:hover{
        display: flex;
    }
`;
