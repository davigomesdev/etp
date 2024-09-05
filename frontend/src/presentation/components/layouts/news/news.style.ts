//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

export const Container = styled.div`
    width: 100%;
    max-width: ${theme.utils.dimensions.maxContainer};
    padding: 20px;
`;

export const Content = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 20px;

    @media only screen and (max-width: 920px) {
        flex-direction: column;
    }
`;

export const Post = styled.div`
    width: 100%;
    max-width: 700px;
    max-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    img {
        width: 100%;
        object-fit: cover;
        transition: scale .3s ease;
    }

    &:hover img{
        scale: 1.15;
    }

    @media only screen and (max-width: 920px) {
        max-width: 100%;
    }
`;

export const PostContent = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(187deg, rgba(0,0,0,0) 40%, rgba(0,0,0,1) 100%);
    position: absolute;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Category = styled.h2`
    color: ${theme.colors.neutralTheme.neutral00};
    font-size: ${theme.font.size.sm};
    font-family: ${theme.font.family.poppins};
    font-weight: ${theme.font.weight.medium};
    padding: 5px 10px;
    background-color: ${theme.colors.blueTheme.blue50};
    text-transform: uppercase;
    width: fit-content;
`;

export const PostBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }

    @media only screen and (max-width: 600px) {
        max-width: 100%;
        h1 {
            font-size: ${theme.font.size.md};
        }

        p {
            font-size: ${theme.font.size.xs};
        }
    }

    @media only screen and (max-width: 450px) {
        p {
            -webkit-line-clamp: 2;
        }
    }
`;

export const PostList = styled.ul`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;

    li {
        width: 100%;
        display: flex;
        gap: 20px;
        cursor: pointer;
    }

    li span {
        color: ${theme.colors.neutralTheme.neutral00};
        font-size: ${theme.font.size.xs};
        font-family: ${theme.font.family.poppins};
        font-weight: ${theme.font.weight.medium};
        background-color: ${theme.colors.blueTheme.blue50};
        padding: 3px 10px;
        text-transform: uppercase;
        width: fit-content;
    }

    li:hover img{
        scale: 1.15;
    }
`;

export const PostMiniImage = styled.div`
    min-width: 200px;
    max-width: 200px;
    height: 120px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 100%;
        object-fit: cover;
        transition: scale 0.3s ease;
    }

    @media only screen and (max-width: 1100px) {
        max-width: 100px;
        min-width: 100px;
        height: 100px;
    }
`;

export const PostMiniContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    h1 {
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }

    p {
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }
`;
