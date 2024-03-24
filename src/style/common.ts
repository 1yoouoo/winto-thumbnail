import styled from "styled-components";

export const Button = styled.div`
  background-color: red;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 16px;
  width: 100%;

  &:focus {
    border-color: #0070f3;
  }
`;
