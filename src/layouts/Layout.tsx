import { Footer } from "../styles/Footer.styles";
import { Header, Logo } from "../styles/Header.styles";
import { Container, Content } from "./Layout.styles";
import broccoliLogo from '../assets/broccoli.png'
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Header>
        <Logo src={broccoliLogo} alt="Broccoli & Co Logo" />
        <h1>Broccoli & Co</h1>
      </Header>
      <Content>{children}</Content>
      <Footer>
        <span>Made with ♥ in Melbourne.</span>
        <br />
        <span>
          &copy; {new Date().getFullYear()} Broccoli & Co. All rights reserved.
        </span>
      </Footer>
    </Container>
  );
};

export default Layout;
