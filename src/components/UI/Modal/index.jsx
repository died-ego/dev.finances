//! Dependências
import React from "react";
import ReactDOM from "react-dom";

//! Estilo local
import "./styles.css";

const portal = document.getElementById("portal");

export default function Modal(props) {
  if (!props.state) {
    return null;
  } else {
    return ReactDOM.createPortal(
      <div className="modal-overlay">
        <div className="modal">{props.children}</div>
      </div>,
      portal
    );
  }
}
