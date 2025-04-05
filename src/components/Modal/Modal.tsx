import { InnerWrapper, ModalWrapper,Overlay } from "./Modal.styles";
interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode
}
const Modal = ({ children, isOpen, closeModal }: ModalProps) => {
  return (
    isOpen && (
      <ModalWrapper>
        <Overlay role="presentation" onClick={closeModal} />
        <InnerWrapper>{children}</InnerWrapper>
      </ModalWrapper>
    )
  );
};

export default Modal