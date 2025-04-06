import { keyframes, styled } from "styled-components";

const rotation = keyframes`
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  animation: ${rotation} 1s linear infinite;
  border-radius: 50%;
  border: 5px solid var(--lighter-green);
  border-bottom-color: var(--reseda-green);
  box-sizing: border-box;
  display: inline-block;
  height: 48px;
  margin: 4.3rem 0;
  width: 48px;
`;
