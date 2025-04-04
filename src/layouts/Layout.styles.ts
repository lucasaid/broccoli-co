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
  padding: var(--container-padding-height) var(--container-padding-width);
`