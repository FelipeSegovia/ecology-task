import { JSX, ReactElement } from 'react';
import './modal.css';

type propsModal = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  children: ReactElement;
};

const Modal = ({ children, isOpen, setIsOpen }: propsModal): JSX.Element => {
  const handleCloseModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`modal-background ${isOpen && 'show'}`}>
      <div
        className={`container-modal ${isOpen ? 'effect-modal' : 'move-down'}`}
      >
        <span className="close" onClick={handleCloseModal}>
          X
        </span>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
