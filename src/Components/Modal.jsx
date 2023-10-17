import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_IS_MODAL, ADD_CARD } from "../Store/Actions";
import { STATUS } from "../Helper/constants";
import { v4 } from "uuid";

function Modal() {
  const isModal = useSelector((state) => state.isModal);
  const allCards = useSelector((state) => state.allCards);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    user: "",
    title: "",
    description: "",
    tags: [],
  });

  const handleCloseModal = () => {
    setInputs({ user: "", title: "", description: "", tags: [] });
    dispatch({ type: SET_IS_MODAL, value: false });
  };

  const handleInputChange = (event) => {
    if (event.target.id === "tags") {
      const splittedTags = event.target.value.split(",");

      setInputs((prev) => {
        return { ...prev, [event.target.id]: splittedTags };
      });
    } else {
      setInputs((prev) => {
        return { ...prev, [event.target.id]: event.target.value };
      });
    }
  };

  const handleSubmit = () => {
    const validTags = inputs.tags.filter((tag) => tag);

    const newCard = {
      ...inputs,
      tags: validTags,
      status: STATUS.TODO,
      cardKey: v4(),
    };
    allCards.pop();
    allCards.push(newCard, {
      title: "empty_card",
      description: null,
      status: STATUS.TODO,
    });
    setInputs({ user: "", title: "", description: "", tags: [] });

    dispatch({ type: ADD_CARD, value: allCards });
    dispatch({ type: SET_IS_MODAL, value: false });
  };

  if (!isModal) return null;

  return (
    <div className="modal-container">
      <h2> Add Tasks</h2>
      <div className="modal-input-container">
        <div className="modal-input-elements">
          User Name* :
          <input
            id="user"
            value={inputs.user}
            className="modal-input-field"
            onChange={handleInputChange}
          />
        </div>
        <div className="modal-input-elements">
          Task Title* :
          <input
            id="title"
            value={inputs.title}
            className="modal-input-field"
            onChange={handleInputChange}
          />
        </div>
        <div className="modal-input-elements">
          Description :
          <input
            id="description"
            value={inputs.description}
            className="modal-input-field"
            onChange={handleInputChange}
          />
        </div>

        <div className="modal-input-elements">
          Tags :
          <input
            id="tags"
            value={inputs.tags}
            className="modal-input-field"
            onChange={handleInputChange}
            placeholder="Please add different tags separated with comma"
          />
        </div>
      </div>
      <button className="modal-button" onClick={handleCloseModal}>
        Close
      </button>
      <button
        className="modal-button"
        onClick={handleSubmit}
        disabled={!inputs.title || !inputs.user}
      >
        Submit
      </button>
    </div>
  );
}

export default Modal;
