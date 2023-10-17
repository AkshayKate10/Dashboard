export const isAllowedFrom = (currentStatus, newStatus, allowedFrom) => {
  const getAllowedList = allowedFrom.find(
    (x) => x.columnName === currentStatus
  );
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
};
