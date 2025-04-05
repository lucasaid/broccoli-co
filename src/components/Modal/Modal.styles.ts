import styled, { keyframes } from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--mindaro);
  height: 100%;
  opacity: 0.3;
  z-index: -1;
  @media (prefers-color-scheme: light) {
    background-color: var(--pakistan-green);
  }
`;
export const InnerWrapper = styled.div`
  background-color: var(--pakistan-green);
  padding: 20px;
  max-width: 500px;
  width: 100%;
  box-sizing: border-box;
  min-height: 200px;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  text-align: center;
  animation: ${fadeIn} 0.3s ease-in-out;
  @media (prefers-color-scheme: light) {
    background-color: var(--mindaro);
  }
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
`;