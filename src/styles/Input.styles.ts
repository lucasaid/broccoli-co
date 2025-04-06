import { FieldError } from "react-hook-form";
import { styled } from "styled-components";

export const Input = styled.input<{ error?: FieldError }>`
  background-color: var(--mindaro);
  border-radius: 5px;
  border: ${(props) =>
    props.error ? "2px solid var(--error-dark)" : "2px solid transparent"};
  box-sizing: border-box;
  color: var(--pakistan-green);
  display: block;
  font-family: Oswald, sans-serif;
  font-size: var(--fs-sm);
  font-weight: 600;
  margin-bottom: 10px;
  max-width: 400px;
  padding: 10px 20px;
  width: 100%;
  @media (prefers-color-scheme: light) {
    background-color: var(--lighter-green);
  }
`;
