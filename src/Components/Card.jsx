import React from "react";
import { useDispatch } from "react-redux";
import { SET_IS_MODAL, DELETE_CARD, FILTER_CARD } from "../Store/Actions";
import { getUserName } from "../Helper/utils";
import { STATUS } from "../Helper/constants";

export function Card(props) {
  const {
    title,
    description,
    tags,
    user,
    cardKey,
    status,
    columnColor,
    selectedUser,
    selectedStatus,
  } = props;

  const dispatch = useDispatch();
  const handleAddCard = () => {
    dispatch({ type: SET_IS_MODAL, value: true });
  };

  const handleDeleteCard = (key, status) => {
    dispatch({ type: DELETE_CARD, value: { key, status } });
    dispatch({
      type: FILTER_CARD,
      value: { selectedUser, selectedStatus },
    });
  };

  if (title === "empty_card" && status === STATUS.TODO) {
    return (
      <div className="empty-card" onClick={handleAddCard}>
        +
      </div>
    );
  } else {
    return (
      <div
        className="card"
        draggable
        onDragStart={(event) => props.handleDragStart(event, cardKey, status)}
        key={cardKey}
        style={{ borderTop: `5px ${columnColor} solid` }}
      >
        <div className="card-header">
          <button
            className="card-delete"
            onClick={() => handleDeleteCard(cardKey, status)}
          >
            x
          </button>
          <div className="card-title">{title}</div>
        </div>

        <div className="card-description">{description}</div>
        <div style={{ textAlign: "left" }}>
          {tags &&
            tags.map((tag, index) => (
              <span className="tags" key={index}>
                {tag}
              </span>
            ))}
        </div>
        <div style={{ width: "100%", textAlign: "right" }}>
          <div className="user">{getUserName(user)}</div>
        </div>
      </div>
    );
  }
}

export default Card;
