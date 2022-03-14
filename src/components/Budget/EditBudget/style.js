import Image from 'next/image';
import styled, { css } from 'styled-components';
export const Control = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-around;
`;
export const Label = styled.label`
  color: white;
  margin-bottom: 0.5rem;
`;
export const Input = styled.input`
  font: inherit;
  background-color: #f1e1fc;
  color: #38015c;
  border-radius: 6px;
  border: 1px solid white;
  width: 170px;
  text-align: left;
  padding: 0.25rem;
  ${({ isNumberInput }) =>
    isNumberInput &&
    css`
      width: 100px;
    `};
`;

export const PlainTextRow = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
export const PlainText = styled.p`
  display: flex;
  justify-content: flex-start;
  width: 120px;
  color: white;
`;

export const EditButton = styled(Image)`
  color: white;
  cursor: pointer;
  justify-content: flex-start;
`;
