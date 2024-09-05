//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

export const Container = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${theme.colors.neutralTheme.neutral00};
    cursor: pointer;
    position: relative;

    &:hover img {
        scale: 1.15;
    }

    &:hover .content{
        transform: translateY(-100px);
    }
`;

export const Image = styled.div`
    height: 155px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.neutralTheme.neutral30};
    overflow: hidden;
    position: relative;

    img {
        width: 100%;
        object-fit: cover;
        transition: scale 0.3s ease;
    }

    @media only screen and (max-width: 930px) {
      height: 140px;
    }
`;

export const Content = styled.div`
    width: 100%;
    height: 120px;
    padding: 10px;
    background-color: ${theme.colors.neutralTheme.neutral00};
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
`;

export const Category = styled.h2`
    color: ${theme.colors.neutralTheme.neutral00};
    font-size: ${theme.font.size.xs};
    font-family: ${theme.font.family.poppins};
    font-weight: ${theme.font.weight.medium};
    padding: 5px 10px;
    background-color: ${theme.colors.blueTheme.blue50};
    text-transform: uppercase;
    width: fit-content;
    position: absolute;
    right: 0;
    top: -28px;
`;

export const Blur = styled.span`
    width: 100%;
    height: 40px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, ${theme.colors.neutralTheme.neutral00} 100%);
`;
