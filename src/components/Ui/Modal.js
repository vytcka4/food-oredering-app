import classes from "./Modal.module.css";
import React from "react";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalPlace = document.querySelector("#overlays");

function Modal(props) {
  return (
    <React.Fragment>
      {ReactDom.createPortal(<Backdrop />, portalPlace)}
      {ReactDom.createPortal(<Overlay>{props.children}</Overlay>, portalPlace)}
    </React.Fragment>
  );
}

export default Modal;
