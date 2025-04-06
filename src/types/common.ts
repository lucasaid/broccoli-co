export interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}
export interface SignUpProps {
  isOpen: boolean;
  closeModal: () => void;
}
export interface RequestInvite {
  name: string;
  email?: string;
}