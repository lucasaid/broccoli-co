import styled, { keyframes } from "styled-components";

export const ModalWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const Overlay = styled.div`
  background-color: var(--mindaro);
  height: 100%;
  left: 0;
  opacity: 0.3;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
  @media (prefers-color-scheme: light) {
    background-color: var(--pakistan-green);
  }
`;
export const InnerWrapper = styled.div`
  align-items: center;
  animation: ${fadeIn} 0.3s ease-in-out;
  background-color: var(--pakistan-green);
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  min-height: 350px;
  padding: 20px;
  position: relative;
  position: relative;
  text-align: center;
  width: 100%;
  @media (prefers-color-scheme: light) {
    background-color: var(--mindaro);
  }
`;
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  position: absolute;
  right: 10px;
  top: 10px;
`;
