import { styled } from "styled-components";

export const Error = styled.span`
  color: var(--error-dark);
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  max-width: 400px;
  text-align: left;
  width: 100%;
  @media (prefers-color-scheme: light) {
    color: var(--error-light);
  }
`;
