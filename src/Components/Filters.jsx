import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FILTER_CARD, RESET_FILTER } from "../Store/Actions";

function Filters({ getCurrentFilter }) {
  const dispatch = useDispatch();
  const allCards = useSelector((state) => state.allCards);
  const columns = useSelector((state) => state.columns);

  const [selectedUser, setSelectedUser] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleDropdownChange = (e, field) => {
    const action = {
      type: FILTER_CARD,
      value: {
        selectedUser,
        selectedStatus,
      },
    };
    if (field === "user") {
      action.value.selectedUser = e.target.value;
    }
    if (field === "status") {
      action.value.selectedStatus = e.target.value;
    }
    dispatch(action);
    if (field === "user") setSelectedUser(e.target.value);
    if (field === "status") setSelectedStatus(e.target.value);
    dispatch(action);
  };

  getCurrentFilter(selectedUser, selectedStatus);

  const onReset = () => {
    dispatch({ type: RESET_FILTER });
    setSelectedStatus("");
    setSelectedUser("");
  };

  const renderUserDropdown = () => {
    const element = allCards
      .filter((card) => card["user"])
      .map((card) => card["user"]);
    element.unshift("ALL");
    const uniqueElements = [...new Set(element)];

    return (
      <select
        value={selectedUser}
        onChange={(event) => handleDropdownChange(event, "user")}
      >
        {uniqueElements &&
          uniqueElements.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
      </select>
    );
  };

  const renderStatusDropdown = () => {
    const element = columns.map((column) => column["columnName"]);
    element.unshift("ALL");
    return (
      <select
        value={selectedStatus}
        onChange={(event) => handleDropdownChange(event, "status")}
      >
        {element &&
          element.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
      </select>
    );
  };

  return (
    <div className="filter-container">
      <div className="filter-dropdown">User Name: {renderUserDropdown()}</div>
      <div className="filter-dropdown">Status : {renderStatusDropdown()}</div>
      <button className="filter-button" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

export default Filters;
