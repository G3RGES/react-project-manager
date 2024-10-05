import React, { useImperativeHandle, forwardRef, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(({ children }, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="">
      {children}
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
