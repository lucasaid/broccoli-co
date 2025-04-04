import {styled} from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1920px;
  min-height: 100vh;
`
export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: var(--container-padding-height) var(--container-padding-width);
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background-image: url("/broccoli_farm.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    opacity: 0.1;
    z-index: -1;
  }
`