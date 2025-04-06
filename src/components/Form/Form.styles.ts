import { styled } from "styled-components";

export const FormElement = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  button:last-of-type {
    margin-top: 50px;
  }
`;

export const ApiError = styled.span`
  color: var(--error-dark);
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  @media (prefers-color-scheme: light) {
    color: var(--error-light);
  }
`;
