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
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  z-index: -1;
  animation: ${fadeIn} 0.3s ease-in-out;
`;
export const InnerWrapper = styled.div`
  background-color: white;
  padding: 20px;
  min-width: 500px;
  min-height: 200px;
  border-radius: 5px;
  color: black; 
  position: relative;
  animation: ${fadeIn} 0.3s ease-in-out;
`;