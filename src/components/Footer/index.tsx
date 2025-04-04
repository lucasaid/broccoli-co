import {FooterWrapper} from "./Footer.styles"
const Footer = () => {
  return (
    <FooterWrapper>
      <span>Made with ♥ in Melbourne.</span>
      <br/>
      <span>&copy; {new Date().getFullYear()} Broccoli & Co. All rights reserved.</span>
    </FooterWrapper>
  )
}

export default Footer