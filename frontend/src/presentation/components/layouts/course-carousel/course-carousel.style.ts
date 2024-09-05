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
    flex-direction: column;
    gap: 35px;
`;

export const Content = styled.div`
    width: 100%;

    .courses {
        padding: 10px;
    }
`;

export const Slide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
