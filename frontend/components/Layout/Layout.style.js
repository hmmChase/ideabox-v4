import styled from 'styled-components';

export const divLayout = styled.div`
  /* max-width: 100vw; */
  /* min-height: 100vh; */
  display: grid;
  /* place-items: center center; */
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'header'
    'main';

  @media (min-width: 600px) {
  }

  @media (min-width: 900px) {
    /* grid-template-columns: 1fr repeat(2, 400px) 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'header-left header-middle header-right'
      '. main .'; */
  }

  @media (min-width: 1200px) {
  }

  @media (min-width: 1800px) {
  }
`;

// export const main = styled.main`
//   padding: 20px;
// `;
