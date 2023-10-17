import { v4 } from "uuid";
import { STATUS, COLUMNS } from "./constants";
export const cards = [
  {
    user: "Akshay Nivratti Kate",
    title: "Change Label",
    description: "Update Layout And Correct Name",
    tags: ["Layout", "important"],
    status: STATUS.TODO,
    cardKey: v4(),
  },
  {
    user: "Suyash Kate",
    title: "Change Label",
    description: "Update Layout And Correct Name",
    tags: ["Layout", "high priority"],
    status: STATUS.INPROGRESS,
    cardKey: v4(),
  },
  {
    user: "Atul Dhotre",
    title: "Change Label",
    description: "Update Layout And Correct Name",
    tags: ["Layout"],
    status: STATUS.COMPLETED,
    cardKey: v4(),
  },
  {
    user: "Katke",
    title: "Change Label",
    description: "Update Layout And Correct Name",
    tags: [],
    status: STATUS.CLOSED,
    cardKey: v4(),
  },
  {
    user: "Sagar",
    title: "Change Label",
    description: "Update Layout And Correct Name",
    tags: ["Layout"],
    status: STATUS.INTEST,
    cardKey: v4(),
  },
  {
    user: "Ninad",
    title: "Change Label",
    description: "Update Layout And Correct Name",
    tags: ["Layout"],
    status: STATUS.TODO,
    cardKey: v4(),
  },
  {
    user: null,
    title: "empty_card",
    description: null,
    tags: [],
    status: STATUS.TODO,
    // cardKey: v4(),
  },
];

export const allColumns = [
  {
    columnName: COLUMNS.TODO,
    color: "blue",
    statusAllowedToDrop: [COLUMNS.INPROGRESS],
    shouldDisplay: true,
  },
  {
    columnName: COLUMNS.INPROGRESS,
    color: "orange",
    statusAllowedToDrop: [COLUMNS.TODO, COLUMNS.COMPLETED],
    shouldDisplay: true,
  },
  {
    columnName: COLUMNS.COMPLETED,
    color: "red",
    statusAllowedToDrop: [COLUMNS.TODO, COLUMNS.INTEST],
    shouldDisplay: true,
  },
  {
    columnName: COLUMNS.INTEST,
    color: "purple",
    statusAllowedToDrop: [COLUMNS.TODO, COLUMNS.CLOSED],
    shouldDisplay: true,
  },
  {
    columnName: COLUMNS.CLOSED,
    color: "green",
    statusAllowedToDrop: [COLUMNS.TODO],
    shouldDisplay: true,
  },
];

// {user:'Akshay',title:'Change Label',description:'update layout',tags:'layout'}

export const isAllowedFrom = (currentStatus, newStatus, allowedFrom) => {
  const getAllowedList = allowedFrom.find(
    (x) => x.columnName === currentStatus
  );
  //   console.log(statusAllowedToDrop);
  const currentColumn = getAllowedList.statusAllowedToDrop;
  if (currentColumn.includes(newStatus)) return true;
  return false;
};

export const getUserName = (name) => {
  const nameArr = name.split(" ");
  const firstLetters = nameArr.map((letter) => letter[0]);
  if (firstLetters.length > 2) firstLetters.length = 2;
  return firstLetters.join("");
};

export const getFilteredCards = (user, status, allCards) => {
  let newState;
  if (user && status) {
    newState = allCards.filter((item) => {
      if (item.user === user && item.status === status) return true;
      if (item.title === "empty_card") return true;
      return false;
    });
  } else if (user) {
    newState = allCards.filter((item) => {
      if (item.user === user) return true;
      if (item.title === "empty_card") return true;
      return false;
    });
  } else if (status) {
    newState = allCards.filter((item) => {
      if (item.status === status) return true;
      if (item.title === "empty_card") return true;
      return false;
    });
  } else {
    return allCards;
  }
  return newState;
  // return { ...state, cardsToRender: newState };
};
