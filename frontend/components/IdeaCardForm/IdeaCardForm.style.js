import styled from 'styled-components';

export const form = styled.form`
  display: flex;
  width: 100%;
  grid-column: span 2;
  position: relative;

  > img {
    width: 50px;
    position: absolute;
    top: -30px;
    left: 10px;
  }

  > textarea {
    padding: 10px 10px 10px 10px;
    outline: none;
    height: 100%;
    min-height: 58px;
    width: 100%;
    resize: vertical;
    border: none;
    margin-right: 1px;
  }

  > button {
    width: 60px;
    border: none;
    background-color: #fffacd;
  }

  @media (min-width: 600px) {
    > img {
      left: 0;
    }
  }
`;
