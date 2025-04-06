import { keyframes, styled } from "styled-components";


const rotation = keyframes`
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  width: 48px;
  height: 48px;
  margin: 4.3rem 0;
  border: 5px solid var(--lighter-green);
  border-bottom-color: var(--reseda-green);
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;
