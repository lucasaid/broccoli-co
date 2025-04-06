import { styled } from "styled-components";

export const Footer = styled.footer`
  background-color: var(--dark-moss-green-2);
  color: var(--lighter-green);
  font-weight: 700;
  font-size: var(--fs-sm);
  padding: var(--container-padding-height) var(--container-padding-width);
  text-align: center;
  @media (prefers-color-scheme: light) {
    color: var(--pakistan-green);
    background-color: var(--lighter-green);
  }
`;
