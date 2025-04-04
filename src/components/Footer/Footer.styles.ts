import {styled} from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: var(--reseda-green);
  border-top: 1px solid var(--dark-moss-green);
  color: var(--pakistan-green);
  font-size: var(--fs-sm);
  padding: var(--container-padding-height) var(--container-padding-width);
  text-align: center;
  @media (prefers-color-scheme: light) {
    background-color: var(--lighter-green);
  }
`;