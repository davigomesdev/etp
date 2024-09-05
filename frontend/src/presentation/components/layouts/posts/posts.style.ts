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

export const Content = styled.div`
    width: 100%;
    position: relative;
`;

export const Slide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SwiperButtonNext = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 35%;
  right: -10px;
  z-index: 1;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  background-color: ${theme.colors.neutralTheme.neutral30};
  cursor: pointer;
  border: none;
`;

export const SwiperButtonPrev = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 35%;
  left: -10px;
  z-index: 1;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  background-color: ${theme.colors.neutralTheme.neutral30};
  cursor: pointer;
  border: none;
`;
