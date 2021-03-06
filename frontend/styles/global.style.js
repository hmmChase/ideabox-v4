import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import theme from './theme.style';

export default createGlobalStyle`
  ${styledNormalize}

  @font-face {
    font-family: 'Open Sans';
    src: url('/static/fonts/open-sans-v15-latin-regular.woff2') format('woff2'),
         url('/static/fonts/open-sans-v15-latin-regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    /* font-display: swap; */
    font-display: fallback;
  }

  @font-face {
    font-family: 'Play';
    src: url('/static/fonts/play-v10-latin-regular.woff2') format('woff2'),
         url('/static/fonts/play-v10-latin-regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    /* font-display: swap; */
    font-display: fallback;
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    color: ${theme.color.black};
    font-family: 'Open Sans', sans-serif;
  }
`;
