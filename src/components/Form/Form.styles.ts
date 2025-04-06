import {styled} from "styled-components";

export const FormElement = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ApiError = styled.span`
  color: var(--error-dark);
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: bold;  
  @media (prefers-color-scheme: light) {
    color: var(--error-light);
  }
`;