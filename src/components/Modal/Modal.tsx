import { ModalProps } from "../../types/common";
import {
  CloseButton,
  InnerWrapper,
  ModalWrapper,
  Overlay,
} from "./Modal.styles";

/**
 * A modal component that wraps the content in a centered modal.
 *
 * @param {React.ReactNode} props.children The content of the modal
 * @param {boolean} props.isOpen Whether the modal is open
 * @param {() => void} props.closeModal Function to close the modal
 */
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
