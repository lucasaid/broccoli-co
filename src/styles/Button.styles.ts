import {styled} from "styled-components";

export const Button = styled.button`
  background-color: var(--lighter-green);
  border-radius: 5px;
  border: none;
  color: var(--pakistan-green);
  cursor: pointer;
  font-family: Oswald, sans-serif;
  font-size: var(--fs-sm);
  font-weight: 600;
  padding: 10px 20px;
  text-transform: uppercase;
  &:hover {
    background-color: var(--dark-moss-green);
    color: var(--mindaro);
  }
`;