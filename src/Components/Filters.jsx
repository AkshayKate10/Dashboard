import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FILTER_CARD, RESET_FILTER } from "../Store/Actions";

function Filters({ getCurrentFilter }) {
  const dispatch = useDispatch();
  const allCards = useSelector((state) => state.allCards);
  const columns = useSelector((state) => state.columns);

  const [selectedUser, setSelectedUser] = useState("");
  const [selectedField, setSelectedField] = useState("");

  const handleDropdownChange = (e, field) => {
    console.log(field);
    if (field === "user") setSelectedUser(e.target.value);
    if (field === "status") setSelectedField(e.target.value);
  };
  getCurrentFilter(selectedUser, selectedField);
  const onSearch = () => {
    dispatch({ type: FILTER_CARD, value: { selectedUser, selectedField } });
  };

  const onReset = () => {
    dispatch({ type: RESET_FILTER });
  };

  const renderUserDropdown = () => {
    const element = allCards
      .filter((card) => card["user"])
      .map((card) => card["user"]);
    element.unshift("");

    return (
      <select onChange={(event) => handleDropdownChange(event, "user")}>
        {element &&
          element.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
      </select>
    );
  };

  const renderStatusDropdown = () => {
    const element = columns.map((column) => column["columnName"]);
    element.unshift("");
    return (
      <select onChange={(event) => handleDropdownChange(event, "status")}>
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
      <button
        className="filter-button"
        onClick={onSearch}
        disabled={!(selectedUser || selectedField)}
      >
        Search
      </button>
      <button className="filter-button" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

export default Filters;
