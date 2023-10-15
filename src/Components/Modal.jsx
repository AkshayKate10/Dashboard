import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_IS_MODAL } from "../Store/Actions";

function Modal(props) {
  const isModal = useSelector((state) => state.isModal);
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch({ type: SET_IS_MODAL, value: false });
  };
  if (!isModal) return null;
  return (
    <div className="modal-container">
      <h2> Add Tasks</h2>
      <button className="modal-button" onClick={handleCloseModal}>
        Close
      </button>
      <button className="modal-button" onClick={handleCloseModal}>
        Submit
      </button>
    </div>
  );
}

export default Modal;
