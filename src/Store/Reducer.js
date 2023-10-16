import * as _ from "./Actions";
import { v4 } from "uuid";
import { STATUS } from "../helper/constants";

const initialstate = {
  allCards: [],
  columns: [],
  filteredCards: [],
  isModal: false,
};

function reducer(state = initialstate, action) {
  switch (action.type) {
    case _.SET_ALL_CARDS: {
      const cards = action.value.map((x) => {
        return { ...x, cardKey: v4() };
      });
      cards.push({
        title: "empty_card",
        description: null,
        status: STATUS.TODO,
      });

      return { ...state, allCards: cards, filteredCards: cards };
    }

    case _.SET_COLUMNS:
      return { ...state, columns: action.value };

    case _.SET_IS_MODAL:
      return { ...state, isModal: action.value };

    case _.ADD_CARD:
      return { ...state, allCards: action.value, filteredCards: action.value };

    case _.DELETE_CARD: {
      if (action.value.status === STATUS.CLOSED) return state;
      let newState = state.filteredCards.filter(
        (x) => x.cardKey !== action.value.key
      );
      console.log(action, state, newState);
      return { ...state, allCards: newState, filteredCards: newState };
    }

    case _.CHANGE_CARD_STATUS: {
      const newState = state.al.map((item) => {
        if (item.cardKey === action.value.cardKey) {
          return { ...item, status: action.value.newStatus };
        }
        return item;
      });
      return { ...state, allCards: newState, filteredCards: newState };
    }

    case _.FILTER_CARD: {
      let newState;
      if (action.value.selectedUser && action.value.selectedField) {
        newState = state.allCards.filter((item) => {
          if (
            item.user === action.value.selectedUser &&
            item.status === action.value.selectedField
          )
            return true;
          return false;
        });
      } else if (action.value.selectedUser) {
        newState = state.allCards.filter((item) => {
          if (item.user === action.value.selectedUser) return true;
          return false;
        });
      } else if (action.value.selectedField) {
        newState = state.allCards.filter((item) => {
          if (item.status === action.value.selectedField) return true;
          return false;
        });
      } else {
        return state;
      }
      return { ...state, filteredCards: newState };
    }

    case _.RESET_FILTER:
      return { ...state, filteredCards: state.allCards };

    case _.MERGE_COLUMN_CONFIG: {
      const customColumns = action.value.customColumn.map((x) => x.columnName);

      const currentColumns = [...state.columns, ...action.value.customColumn];
      console.log(action.value, currentColumns, customColumns);
      return { ...state, columns: currentColumns };
    }

    default:
      return state;
  }
}
export { reducer };
