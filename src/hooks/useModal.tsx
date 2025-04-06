import { useState, useCallback } from "react";

/**
 * Hook to manage the state of a modal.
 *
 * @returns An object with the following properties:
 *   - isOpen: A boolean indicating whether the modal is open or not.
 *   - openModal: A function to open the modal.
 *   - closeModal: A function to close the modal.
 *   - toggleModal: A function to toggle the modal's open state.
 *
 * @example
 * const { isOpen, openModal, closeModal, toggleModal } = useModal();
 *
 * return (
 *   <div>
 *     {isOpen && <ModalContent />}
 *     <button onClick={openModal}>Open modal</button>
 *     <button onClick={closeModal}>Close modal</button>
 *     <button onClick={toggleModal}>Toggle modal</button>
 *   </div>
 * );
 */
export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleModal = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
  };
};

export default useModal;
