import styled from 'styled-components';

export const divLayout = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    'header'
    'main';

  > header {
    grid-area: header;
  }

  > main {
    grid-area: main;
  }
`;

export const main = styled.main`
  padding: 20px;
`;
