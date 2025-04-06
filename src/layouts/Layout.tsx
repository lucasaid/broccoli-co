import { Footer } from "../styles/Footer.styles";
import { Header, Logo } from "../styles/Header.styles";
import { Container, Content } from "./Layout.styles";
import broccoliLogo from '../assets/broccoli.png'
import { COMPANY_NAME } from "../utils/constants";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Header>
        <Logo src={broccoliLogo} alt={`${COMPANY_NAME} Logo`} />
        <h1>{COMPANY_NAME}</h1>
      </Header>
      <Content>{children}</Content>
      <Footer>
        <span>Made with ♥ in Melbourne.</span>
        <br />
        <span>
          &copy; {new Date().getFullYear()} {COMPANY_NAME} All rights reserved.
        </span>
      </Footer>
    </Container>
  );
};

export default Layout;
