import { createGlobalStyle } from 'styled-components';
import { theme } from '../themes/theme';

const globalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    .carousel .swiper-button-next, .carousel .swiper-button-prev {
        color: ${theme.colors.neutralTheme.neutral90};
        background-color: ${theme.colors.neutralTheme.neutral30};
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        margin-top: -25px;
        transition: opacity .3s ease;
    }

    .carousel .swiper-button-next:hover, .carousel .swiper-button-prev:hover {
        opacity: 1;     
    }

    .carousel .swiper-button-next::after, .carousel .swiper-button-prev::after {
        font-size: 20px;
    }
`;

export default globalStyle;
