import { Button } from "../styles/Button.styles"

const Index = () => {
  return (
    <>
      <h2>A better way<br/>to enjoy every day.</h2>
      <p>Be the first to know when we launch.</p>
      <Button onClick={() => { alert("Request and invite")}}>Request and invite</Button>
    </>
  )
}

export default Index