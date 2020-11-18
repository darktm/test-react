import React from "react";

import "./Modal.css";

export const Modal = ({
  title,
  modal,
  setModal,
  textValue,
  setTextValue,
  changeText,
}) => {
  // console.log(value.target.value);
  const close = () => setModal(false);
  const clear = () => {
    setTextValue("");
    close();
  };
  return (
    <div className={modal ? "modal active" : "modal"} onClick={close}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__content__header">
          <h3>Modal {title}</h3>
        </div>
        <div className="modal__content__body">
          <input type="text" value={textValue} onChange={changeText} />
        </div>
        <div className="modal__content_active">
          <button onClick={close}>Закрыть и сохранить</button>
          <button onClick={clear}>Закрыть</button>
        </div>
      </div>
    </div>
  );
};
