import { styled } from "styled-components";

export const Header = styled.header`
  align-items: center;
  background-color: var(--reseda-green);
  color: var(--pakistan-green);
  display: flex;
  justify-content: start;
  padding: var(--container-padding-height) var(--container-padding-width);
  text-transform: uppercase;
  @media (prefers-color-scheme: light) {
    background-color: var(--lighter-green);
  }
`;
export const Logo = styled.img`
  filter: drop-shadow(1px 0px 0px black) drop-shadow(-1px 0px 0px black)
    drop-shadow(0px 1px 0px black) drop-shadow(0px -1px 0px black);
  height: 2rem;
  margin-right: 10px;
`;
