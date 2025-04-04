import { HeaderWrapper, Logo } from "./Header.styles"
import broccoliLogo from '../../assets/broccoli.png'

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={broccoliLogo} alt="Broccoli & Co Logo" />
      <h1>Brocoli & Co</h1>
    </HeaderWrapper>
  )
}

export default Header