import styled from 'styled-components';
import { purpleLinkBtn, orangeLinkBtn } from '../../styles/button.style';

export const signOn = styled.div`
  white-space: nowrap;
  margin: 5px;
  /* position: absolute; */
  /* top: 0; */
  /* right: 0; */
  justify-self: end;
  /* grid-area: page; */
  grid-area: header-right;
  /* grid-column: 2 / 3; */

  @media (min-width: 900px) {
    /* grid-area: middle; */
  }
`;

export const purpleBtn = styled(purpleLinkBtn)`
  /* margin: 10px; */
`;

export const orangeBtn = styled(orangeLinkBtn)`
  margin-left: 10px;
`;
