//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 15px;
    border-radius: 10px;
    border: 1px solid ${theme.colors.blueTheme.blue90};
    box-shadow: 4px 4px 0 ${theme.colors.blueTheme.blue90};

    @media (max-width: 600px) {
        flex-direction: column;
        padding: 10px;
        padding: 20px;
    }
`;

export const Icon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        font-size: 50px;
        color: ${theme.colors.neutralTheme.neutral00};
    }

    @media (max-width: 1000px) {
        svg {
            font-size: 40px;
            color: ${theme.colors.neutralTheme.neutral00};
        }
    }

    @media (max-width: 600px) {
        svg {
            font-size: 50px;
        }
    }
`;

export const Content = styled.div`

    h1 {
        color: ${theme.colors.neutralTheme.neutral00};
        font-size: ${theme.font.size.sm};
        font-family: ${theme.font.family.poppins};
        font-weight: ${theme.font.weight.medium};
    }

    p {
        color: ${theme.colors.neutralTheme.neutral00};
        font-size: ${theme.font.size.xs};
        font-family: ${theme.font.family.poppins};
        font-weight: ${theme.font.weight.extraLight};
    }

    
    @media (max-width: 600px) {
        max-width: 250px;
        h1 {
            text-align: center;
            font-size: ${theme.font.size.md};
        }

        p {
            text-align: center;
            font-size: ${theme.font.size.sm};
        }
    }
`;
