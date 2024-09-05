//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

export const Container = styled.div`
    width: 247px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    background-color: ${theme.colors.neutralTheme.neutral00};

    &:hover img {
        scale: 1.15;
    }

    p {
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }
`;

export const Image = styled.div`
    width: 100%;
    height: 347px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.neutralTheme.neutral30};
    overflow: hidden;
    position: relative;

    img {
        height: 100%;
        object-fit: cover;
        transition: scale 0.3s ease;
    }
`;

export const Shape = styled.span`
    padding: 14px 20px;
    width: 100%;
    max-width: 200px;
    background-color: ${theme.colors.blueTheme.blue50};
    position: absolute;
    bottom:  30px;
    right: 0;
`;
