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
    case _.DELETE_CARD: {
      if (action.value.status === "CLOSED") return state;
      let newState = state.allCards.filter(
        (x) => x.cardKey !== action.value.key
      );
      console.log(action, state, newState);
      return { ...state, allCards: newState };
    }
    case _.CHANGE_CARD_STATUS: {
      const newState = state.allCards.map((item) => {
        if (item.cardKey === action.value.cardKey) {
          return { ...item, status: action.value.newStatus };
        }
        return item;
      });
      return { ...state, allCards: newState };
    }

    default:
      return state;
  }
}
export { reducer };
