import { Fragment, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Backdrop = (props: { onClick: () => void }) => {
  return <div onClick={props.onClick} className="backdrop" />;
};

const ModalOverlay = ({
  children,
  title,
  onClick,
}: {
  children: React.ReactElement;
  title?: string;
  onClick: () => void;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const centerModal = () => {
      const modal = modalRef.current;
      if (!modal) {
        return;
      }
      const leftPos = (window.innerWidth - modal.offsetWidth) / 2;
      const topPost = (window.innerHeight - modal.offsetHeight) / 2 - 50;
      modal.style.left = `${leftPos}px`;
      modal.style.top = `${topPost}px`;
    };

    centerModal();

    window.addEventListener("resize", centerModal);

    return () => {
      window.removeEventListener("resize", centerModal);
    };
  }, []);

  return (
    <div ref={modalRef} className={`modal`}>
      <div className="modal__top">
        <span></span>
        {title ?? "Notification"}{" "}
        <AiOutlineClose className="modal__close" onClick={onClick} />
      </div>
      <div className="modal__content">{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays") as HTMLElement;

const Modal = ({
  children,
  onClick,
  title,
}: {
  children: React.ReactElement;
  onClick: () => void;
  title?: string;
}) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={onClick} />, portalElement)}

      {ReactDOM.createPortal(
        <ModalOverlay title={title} onClick={onClick}>
          {children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
