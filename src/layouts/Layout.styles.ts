import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1920px;
  min-height: 100vh;
`;
export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  padding: var(--container-padding-height) var(--container-padding-width);
  position: relative;
  text-align: center;
  &:after {
    background-attachment: fixed;
    background-image: url("/broccoli_farm.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    content: "";
    height: 100%;
    left: 0;
    opacity: 0.1;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
`;
