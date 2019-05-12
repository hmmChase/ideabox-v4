import styled from 'styled-components';

// export const headerLeft = styled.div`
//   /* grid-area: header-left; */
//   background-color: #282c34;
// `;

// export const headerRight = styled.div`
//   /* grid-area: header-right; */
//   background-color: #282c34;
// `;

export const header = styled.header`
  grid-area: header;
  display: grid;
  background-color: #282c34;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'header-left header-right';
  place-items: center center;

  @media screen and (min-width: 900px) {
    /* grid-column: 2 / 4; */

    /* grid-template-rows: auto auto; */

    /* grid-template-areas: */
    /* 'left middle-top right' */
    /* 'left middle-bottom right'; */
  }
`;

export const h1 = styled.h1`
  font-size: 1rem;
  font-family: 'Play', sans-serif;
  /* color: ${props => props.theme.yellow}; */
  color: #ACE;
  margin: 0 5px 0 80px;
  justify-self: start;
  /* grid-area: header; */

  @media (min-width: 900px) {
    /* grid-area: middle; */
  }
`;
