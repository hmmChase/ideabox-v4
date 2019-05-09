import styled from 'styled-components';

export const form = styled.form`
  display: flex;
  width: 100%;
  position: relative;

  > img {
    width: 100px;
    position: absolute;
    top: -60px;
    left: -45px;
  }

  > textarea {
    padding: 10px;
    outline: none;
    width: 100%;
    padding-left: 20px;
    resize: vertical;
  }

  > button {
    width: 60px;
    border: none;
    background-color: #fffacd;
  }
`;
