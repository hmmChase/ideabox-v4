import styled from 'styled-components';

export const header = styled.header`
  background-color: #282c34;
  padding: 20px 0;
`;

export const headerContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr / 1fr;
  /* flex-wrap: nowrap; */

  /* align-items: center; */
  /* flex-direction: column; */
  max-width: 800px;
`;

export const h1 = styled.h1`
  margin: 0;
  font-size: 2em;
  color: white;
  margin-bottom: 20px;
  font-family: 'Play', sans-serif;
  color: ${props => props.theme.yellow};
`;
