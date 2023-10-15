import React from "react";
import { useDispatch } from "react-redux";
import { SET_IS_MODAL } from "../Store/Actions";

export function Card(props) {
  const { title, description, tags, user, cardKey, status, columnColor } =
    props;

  const dispatch = useDispatch();
  const handleAddCard = () => {
    console.log("clicked");
    dispatch({ type: SET_IS_MODAL, value: true });
  };
  if (title === "empty_card" && status === "TO-DO") {
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
        <div className="card-title">{title}</div>
        <div className="card-description">{description}</div>
        <div style={{ textAlign: "left" }}>
          {tags &&
            tags.map((tag, index) => (
              <span className="tags" key={index}>
                {tag}
              </span>
            ))}
        </div>
        <div className="user">{user}</div>
      </div>
    );
  }
}

export default Card;
