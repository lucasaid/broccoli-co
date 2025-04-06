import {styled} from "styled-components";

export const Error = styled.span`
  color: var(--error-dark);
  margin-bottom: 10px;
  text-align: left;
  width: 100%;
  max-width: 400px;
  font-size: 14px;
  font-weight: bold;  
  @media (prefers-color-scheme: light) {
    color: var(--error-light);
  }
`;