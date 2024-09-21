import ReactModal from "react-modal";

import { useMyContext } from "../hooks/useMyContext";

import s from "./ImageModal.module.css";

ReactModal.setAppElement("#root");

const ImageModal = () => {
  const { isOpen, close, urlImage } = useMyContext();

  return (
    <>
      <div>
        <ReactModal
          isOpen={isOpen}
          closeTimeoutMS={250}
          preventScroll={true}
          onRequestClose={close}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          className={s.modalContent}
          overlayClassName={s.modalOverlay}
        >
          <img src={urlImage} className={s.image} />
        </ReactModal>
      </div>
    </>
  );
};

export default ImageModal;
