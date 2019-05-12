import styled from 'styled-components';

export const form = styled.form`
  /* grid-area: header-right; */
  display: flex;
  width: 100%;
  padding-bottom: 1px;
  grid-column: span 2;
  position: relative;

  > img {
    width: 50px;
    position: absolute;
    /* top: -60px;
    left: -45px; */
    top: -30px;
    left: 10px;
  }

  > textarea {
    padding: 10px 10px 10px 10px;
    outline: none;
    /* vertical-align: bottom; */
    height: 100%;
    /* flex-grow: 1; */
    width: 100%;
    /* resize: vertical; */
  }

  > button {
    width: 60px;
    border: none;
    /* height: 100%; */
    /* border-bottom: 1px solid black; */
    /* vertical-align: bottom; */

    background-color: #fffacd;
  }

  @media (min-width: 900px) {
    /* display: grid; */

    /* grid-area: middle; */

    /* grid-template-columns: 1fr 600px 1fr; */
    /* grid-template-rows: auto auto; */

    /* grid-template-areas: */
    /* 'left middle-top right' */
    /* 'left middle-bottom right'; */
  }
`;
