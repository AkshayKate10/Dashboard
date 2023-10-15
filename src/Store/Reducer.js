import * as _ from "./Actions";

const initialstate = {
  allCards: [],
  columns: [],
  isModal: false,
};

function reducer(state = initialstate, action) {
  switch (action.type) {
    case _.SET_ALL_CARDS:
      return { ...state, allCards: action.value };
    case _.SET_COLUMNS:
      return { ...state, columns: action.value };
    case _.SET_IS_MODAL:
      return { ...state, isModal: action.value };
    case _.CHANGE_CARD_STATUS:
      return { ...state, allCards: action.value };
    default:
      return state;
  }
}
export { reducer };
