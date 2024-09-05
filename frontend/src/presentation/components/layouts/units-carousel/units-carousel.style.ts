//styled imports
import styled from 'styled-components';

//swiper imports
import { SwiperSlide } from 'swiper/react';

//theme imports
import { theme } from '../../../themes/theme';

export const Container = styled.div`
    width: 100%;
    max-width: ${theme.utils.dimensions.maxContainer};
    display: flex;
    flex-direction: column;
    gap: 35px;
    padding-bottom: 20px;

    .swiper-feedbacks {
      padding: 5px;
    }
`;

export const Content = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    padding: 15px;
`;

export const Slide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-height: 265px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;
