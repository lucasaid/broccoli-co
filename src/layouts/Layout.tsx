import Header from "../components/Header"
import { Container } from "./Layout.styles"
const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}

export default Layout
