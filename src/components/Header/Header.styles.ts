import { styled } from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px 20px;
  text-transform: uppercase;
  border-bottom: 1px solid var(--dark-moss-green);
  background-color: var(--reseda-green);
  color: var(--pakistan-green);
  @media (prefers-color-scheme: light) {
    background-color: var(--lighter-green);
  }
`;
export const Logo = styled.img`
  margin-right: 10px;
  height: 2rem;
`;