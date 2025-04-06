import { ModalProps } from "../../types/common";
import {
  CloseButton,
  InnerWrapper,
  ModalWrapper,
  Overlay,
} from "./Modal.styles";

export const Modal = ({ children, isOpen, closeModal }: ModalProps) => {
  return (
    isOpen && (
      <ModalWrapper>
        <Overlay role="presentation" onClick={closeModal} />
        <InnerWrapper>
          <CloseButton aria-label="Close" onClick={closeModal}>X</CloseButton>
          {children}
        </InnerWrapper>
      </ModalWrapper>
    )
  );
};

export default Modal;
