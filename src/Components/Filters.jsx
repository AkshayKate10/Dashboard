import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FILTER_CARD, RESET_FILTER } from "../Store/Actions";

function Filters(props) {
  const dispatch = useDispatch();
  const allCards = useSelector((state) => state.allCards);
  const state = useSelector((state) => state);

  const [selectedUser, setSelectedUser] = useState("");
  const [selectedField, setSelectedField] = useState("");

  const handleDropdownChange = (e, field) => {
    console.log(field);
    if (field === "user") setSelectedUser(e.target.value);
    if (field === "status") setSelectedField(e.target.value);
  };

  const onSearch = () => {
    dispatch({ type: FILTER_CARD, value: { selectedUser, selectedField } });
    console.log(state);
  };

  const onReset = () => {
    dispatch({ type: RESET_FILTER });
    console.log(state);
  };

  const renderDropdown = (field) => {
    const array = allCards
      .filter((card) => card[`${field}`])
      .map((card) => card[`${field}`]);
    return (
      <select onChange={(event) => handleDropdownChange(event, field)}>
        {array &&
          array.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
      </select>
    );
  };

  return (
    <div className="filter-container">
      <div className="filter-dropdown">User Name: {renderDropdown("user")}</div>
      <div className="filter-dropdown">Status : {renderDropdown("status")}</div>
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
