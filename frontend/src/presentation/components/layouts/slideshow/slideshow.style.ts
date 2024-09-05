//styled imports
import styled from 'styled-components';

//swiper imports
import { Swiper } from 'swiper/react';

//theme imports
import { theme } from '../../../themes/theme';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.blueTheme.blue50};
`;

export const Content = styled.div`
  width: 100%;
  max-width: ${theme.utils.dimensions.maxSliderContainer};
`;

export const Slides = styled(Swiper)`
  --swiper-navigation-color: ${theme.colors.neutralTheme.neutral00};
  --swiper-pagination-color: ${theme.colors.neutralTheme.neutral00};
`;
