import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Action from "../Store/Actions";
import Columns from "./Columns";
import { allColumns, isAllowedFrom } from "../helper/utils";
import Modal from "./Modal";
import Filters from "./Filters";

function Main() {
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.columns);
  const allFilteredCards = useSelector((state) => state.filteredCards);
  const isModal = useSelector((state) => state.isModal);
  const allowedTo = useSelector((state) => state.columns);
  const [currentStatus, setCurrentStatus] = useState(null);
  const [filteredCards, setFilteredCards] = useState(null);
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const getMergedColumnsList = (allColumns, customColumn) => {
    let newConfig = [...allColumns];

    for (let i = 0; i < customColumn.length; i++) {
      const isColumnExists = Boolean(
        newConfig.find(
          (column) => column.columnName === customColumn[i].columnName
        )
      );
      if (isColumnExists) {
        // handling overriding or modifying base configs
        const updatedColumnList = newConfig.map((column) => {
          if (column.columnName === customColumn[i].columnName) {
            return { ...column, ...customColumn[i] };
          }
          return column;
        });
        newConfig = updatedColumnList;
        dispatch({ type: Action.SET_COLUMNS, value: updatedColumnList });
      } else {
        // handling addition of new columns
        newConfig.push(customColumn[i]);
        dispatch({ type: Action.SET_COLUMNS, value: newConfig });
      }
    }

    // all.forEach(getNewColumns);
  };

  useEffect(() => {
    console.log("called");
    dispatch({ type: Action.SET_COLUMNS, value: allColumns });
    (async () => {
      const getColumns = await fetch("http://localhost:5000/api/columns"); // get user defined customization
      const getCards = await fetch("http://localhost:5000/api/cards"); // get user defined cards
      const { customColumn } = await getColumns.json();
      const { cards } = await getCards.json();

      getMergedColumnsList(allColumns, customColumn);

      console.log(customColumn, cards);
      dispatch({ type: Action.SET_ALL_CARDS, value: cards });

      //dispatch({ type: Action.SET_COLUMNS, value: mergedColumsList });

      // dispatch({ type: Action.MERGE_COLUMN_CONFIG, value: customColumn });
    })();
  }, []);

  useEffect(() => {
    setFilteredCards(allFilteredCards);
  }, [allFilteredCards, isModal]);

  const handleDragStart = (event, cardKey, currentStatus) => {
    event.dataTransfer.setData("cardKey", cardKey);
    setCurrentStatus(currentStatus);
  };

  const handleDragOver = (event, newStatus) => {
    if (!isAllowedFrom(currentStatus, newStatus, allowedTo)) return;
    event.preventDefault();
  };

  const getCurrentFilter = (selectedUser, selectedStatus) => {
    setSelectedUser(selectedUser);
    setSelectedStatus(selectedStatus);
  };

  const handleDrop = (event, newStatus) => {
    event.preventDefault();
    setCurrentStatus(null);

    const cardKey = event.dataTransfer.getData("cardKey");

    dispatch({
      type: Action.CHANGE_CARD_STATUS,
      value: { cardKey, newStatus },
    });
    dispatch({
      type: Action.FILTER_CARD,
      value: { selectedUser, selectedStatus },
    });
  };

  return (
    <div>
      <h1>Task Dashboard</h1>
      <Filters getCurrentFilter={getCurrentFilter} />
      <div className="column-container">
        {columns &&
          columns.map((column, index) => {
            if (column.shouldDisplay) {
              return (
                <Columns
                  columnName={column.columnName}
                  filteredCards={filteredCards}
                  columnColor={column.color}
                  handleDragStart={handleDragStart}
                  handleDragOver={handleDragOver}
                  handleDrop={handleDrop}
                  selectedUser={selectedUser}
                  selectedStatus={selectedStatus}
                  key={index}
                />
              );
            } else {
              return;
            }
          })}
        <Modal />
      </div>
    </div>
  );
}

export default Main;
