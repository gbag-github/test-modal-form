export enum TEST_IDS {
  MODAL = 'MODAL',
  SAVE_BTN = 'SAVE',
  CANCEL_BTN = 'CANCEL',
  CLOSE = 'CLOSE_MODAL'
}

export interface ModalProps {
  className?: string;
  children: React.ReactNode;
  hide: () => void;
  isClosable?: boolean;
  isSuccess?: boolean;
  isVisible?: boolean;
}
