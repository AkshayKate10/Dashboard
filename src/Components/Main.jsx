import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import * as Action from "../Store/Actions";
import Columns from "./Columns";
import { cards, allColumns, isAllowedFrom } from "../helper/utils";
import Modal from "./Modal";

function Main() {
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.columns);
  const allCards = useSelector((state) => state.allCards);
  const allowedTo = useSelector((state) => state.columns);
  const [currentStatus, setCurrentStatus] = useState(null);

  useEffect(() => {
    dispatch({ type: Action.SET_ALL_CARDS, value: cards });
    dispatch({ type: Action.SET_COLUMNS, value: allColumns });
  }, []);
  const check = () => {
    console.log(v4());
  };

  const handleDragStart = (event, cardKey, currentStatus) => {
    event.dataTransfer.setData("cardKey", cardKey);
    setCurrentStatus(currentStatus);
  };

  const handleDragOver = (event, newStatus) => {
    if (!isAllowedFrom(currentStatus, newStatus, allowedTo)) return;
    event.preventDefault();
  };

  const handleDrop = (event, newStatus) => {
    event.preventDefault();
    setCurrentStatus(null);

    const cardKey = event.dataTransfer.getData("cardKey");

    dispatch({
      type: Action.CHANGE_CARD_STATUS,
      value: { cardKey, newStatus },
    });
  };
  return (
    <div>
      <h1>Task Dashboard</h1>
      <div className="column-container">
        {columns &&
          columns.map((column, index) => (
            <Columns
              columnName={column.columnName}
              allCards={allCards}
              columnColor={column.color}
              handleDragStart={handleDragStart}
              handleDragOver={handleDragOver}
              handleDrop={handleDrop}
              key={index}
            />
          ))}
        <Modal />
      </div>
    </div>
  );
}

export default Main;
