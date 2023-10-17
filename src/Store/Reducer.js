import * as _ from "./Actions";
import { v4 } from "uuid";
import { STATUS } from "../Helper/constants";

const initialstate = {
  allCards: [],
  columns: [],
  filteredCards: [],
  isModal: false,
  filterInputs: {
    selectedUser: "",
    selectedStatus: "",
  },
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
      let newState = state.allCards.filter(
        (x) => x.cardKey !== action.value.key
      );
      return { ...state, allCards: newState, filteredCards: newState };
    }

    case _.CHANGE_CARD_STATUS: {
      const newState = state.allCards.map((item) => {
        if (item.cardKey === action.value.cardKey) {
          return { ...item, status: action.value.newStatus };
        }
        return item;
      });
      return { ...state, allCards: newState, filteredCards: newState };
    }

    case _.SET_FILTER_INPUTS:
      return { ...state, filterInputs: action.value };

    case _.FILTER_CARD: {
      const {
        value: { selectedUser, selectedStatus },
      } = action;
      let newState;
      if (selectedUser && selectedStatus) {
        newState = state.allCards.filter((card) => {
          if (card.user === selectedUser && card.status === selectedStatus)
            return true;
          if (card.title === "empty_card") return true;
          return false;
        });
      } else if (selectedUser) {
        newState = state.allCards.filter((card) => {
          if (card.user === selectedUser) return true;
          if (card.title === "empty_card") return true;
          return false;
        });
      } else if (selectedStatus) {
        newState = state.allCards.filter((card) => {
          if (card.status === selectedStatus) return true;
          if (card.title === "empty_card") return true;
          return false;
        });
      } else {
        return state;
      }
      return { ...state, filteredCards: newState };
    }
    // return { ...state, filteredCards: action.value };

    case _.RESET_FILTER:
      return {
        ...state,
        filteredCards: state.allCards,
        filterInputs: { selectedStatus: "", selectedUser: "" },
      };

    default:
      return state;
  }
}
export { reducer };
