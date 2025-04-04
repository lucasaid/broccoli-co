import Footer from "../components/Footer"
import Header from "../components/Header"
import { Container, Content } from "./Layout.styles"
const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  )
}

export default Layout
