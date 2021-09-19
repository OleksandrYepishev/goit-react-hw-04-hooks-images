import useEvent from '../../Hooks/UseEvent';
import { Overlay, ModalImg } from './modal.styled';

export const Modal = ({ srcImg, altImg, onClose }) => {
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEvent('keydown', handleKeyDown);

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalImg>
        <img src={srcImg} alt={altImg} />
      </ModalImg>
    </Overlay>
  );
};
