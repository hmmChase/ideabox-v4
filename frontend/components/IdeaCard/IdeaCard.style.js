import styled from 'styled-components';

export const li = styled.li`
  display: flex;
  position: relative;
  width: 80%;
  margin: 20px;
`;

export const deleteBtn = styled.button`
  background: none;
  background-image: url('/static/delete.svg');
  position: absolute;
  right: -10px;
  top: -10px;
  height: 20px;
  width: 20px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
`;

export const ideaP = styled.p`
  text-align: left;
  width: 100%;
  outline: none;
  border: black solid 1px;
  padding: 5px;
  margin: 0;
`;
