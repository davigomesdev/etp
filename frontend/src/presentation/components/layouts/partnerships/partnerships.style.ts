//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

export const Container = styled.div`
    width: 100%;
    max-width: ${theme.utils.dimensions.maxContainer};
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 20px;

    .swiper-feedbacks {
      padding: 5px;
    }
`;

export const Slider = styled.div`
    width: 100%;
    max-width: ${theme.utils.dimensions.maxContainer};
    display: flex;
    overflow-x: hidden;
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 15px;
    gap: 70px;
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  img {
    height: 100%;
  }
`;

export const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SwiperButtonNext = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: -10px;
  z-index: 1;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  background-color: ${theme.colors.neutralTheme.neutral30};
  cursor: pointer;
`;

export const SwiperButtonPrev = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: -10px;
  z-index: 1;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  background-color: ${theme.colors.neutralTheme.neutral30};
  cursor: pointer;
`;
