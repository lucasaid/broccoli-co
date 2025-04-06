import { useModal } from "../hooks/useModal";
import { Button } from "../styles/Button.styles";
import { SignUp } from "../components/SignUp";

const Index = () => {
  const { openModal, isOpen, closeModal } = useModal();
  return (
    <>
      {isOpen && <SignUp isOpen={isOpen} closeModal={closeModal} />}
      <h2>
        A better way
        <br />
        to enjoy every day.
      </h2>
      <p>Be the first to know when we launch.</p>
      <Button onClick={openModal}>Request an invite</Button>
    </>
  );
};

export default Index;
