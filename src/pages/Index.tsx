import { Button } from "../styles/Button.styles";
import SignUp from "../components/SignUp";
import { useModal } from "../hooks/useModal";

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
