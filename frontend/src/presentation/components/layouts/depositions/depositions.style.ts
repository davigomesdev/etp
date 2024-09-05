//styled imports
import styled from 'styled-components';

//swiper imports
import { SwiperSlide } from 'swiper/react';

//theme imports
import { theme } from '../../../themes/theme';

export const Container = styled.div`
    width: 100%;
    max-width: ${theme.utils.dimensions.maxContainer};
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 35px;
`;

export const Video = styled.iframe`
    width: 100%;
    height: 430px;
    border: none;

    @media only screen and (max-width: 750px) {
      height: 350px;
    }

    @media only screen and (max-width: 550px) {
      height: 270px;
    }
`;

export const Content = styled.div`
    width: 100%;
    position: relative;
`;

export const Slide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
