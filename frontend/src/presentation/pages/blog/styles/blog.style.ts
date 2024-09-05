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
    padding: 20px;
    max-width: ${theme.utils.dimensions.maxContainer};
    display: flex;
    justify-content: center;
    align-items: self-start;
    gap: 30px;
`;

export const Posts = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Post = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 330px 1fr;
    gap: 25px;
    cursor: pointer;
    
    span {
        color: ${theme.colors.neutralTheme.neutral00};
        font-size: ${theme.font.size.xs};
        font-family: ${theme.font.family.poppins};
        font-weight: ${theme.font.weight.medium};
        background-color: ${theme.colors.blueTheme.blue50};
        padding: 3px 10px;
        text-transform: uppercase;
        width: fit-content;
    }

    &:hover img{
        scale: 1.15;
    }

    @media (max-width: 1100px) {
        grid-template-columns: 200px 1fr;
    }

    @media (max-width: 800px) {
        grid-template-columns: 170px 1fr;
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const PostImage = styled.div`
    width: 100%;
    height: 180px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        object-fit: cover;
        transition: scale 0.3s ease;
    }
`;

export const PostContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    h1 {
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        margin-top: 20px;
    }

    p {
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
    }
`;

export const Offer = styled.div`
    flex: 1;
    max-width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 80px;

    img {
        width: 100%;
    }

    @media (max-width: 1100px) {
        max-width: 300px;
    }

    @media (max-width: 800px) {
        display: none;
    }
`;
