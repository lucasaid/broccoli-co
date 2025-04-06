import { FieldError } from "react-hook-form";
import {styled} from "styled-components";

export const Input = styled.input<{error?: FieldError}>`
  background-color: var(--mindaro);
  border: ${props => props.error ? "2px solid var(--error-dark)" : "2px solid transparent"};
  border-radius: 5px;
  color: var(--pakistan-green);
  font-family: Oswald, sans-serif;
  font-size: var(--fs-sm);
  font-weight: 600;
  padding: 10px 20px;
  width: 100%;
  max-width: 400px;
  display: block;
  box-sizing: border-box;
  margin-bottom: 10px;
  @media (prefers-color-scheme: light) {
    background-color: var(--lighter-green);
  }
  
`;