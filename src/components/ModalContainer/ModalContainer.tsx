import React, { FC } from "react";
import "./ModalContainer.scss";

type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="modal-content-close" onClick={onClose}>
          X
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

type ModalContainerProps = {
  isOpen: boolean;
  onClose: () => void;
  modalContent: FC;
};

const ModalContainer: FC<ModalContainerProps> = ({
  isOpen,
  onClose,
  modalContent: ModalContent,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Modal onClose={onClose}>
      <ModalContent />
    </Modal>
  );
};

export default ModalContainer;
