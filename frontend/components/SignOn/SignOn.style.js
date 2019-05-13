import styled from 'styled-components';
import { purpleLinkBtn, orangeLinkBtn } from '../../styles/button.style';

export const signOn = styled.div`
  white-space: nowrap;
  justify-self: end;
  grid-area: header-right;
`;

export const purpleBtn = styled(purpleLinkBtn)``;

export const orangeBtn = styled(orangeLinkBtn)`
  margin: 0 10px;

  @media screen and (min-width: 600px) {
    margin-right: 0;
  }
`;
