import { v4 } from "uuid";
export const cards = [
  {
    user: "Akshay Nivratti Kate",
    title: "Change Label",
    description: "Update Layout And Correct Name",
    tags: ["Layout", "important"],
    status: "TO-DO",
    cardKey: v4(),
  },
  {
    user: "Suyash Kate",
    title: "Change Label",
    description: "Update Layout And Correct Name",
    tags: ["Layout", "high priority"],
    status: "IN-PROGRESS",
    cardKey: v4(),
  },
  {
    user: "Atul",
    title: "Change Label",
    description: "Update Layout And Correct Name",
    tags: ["Layout"],
    status: "COMPLETED",
    cardKey: v4(),
  },
  {
    user: "Katke",
    title: "Change Label",
    description: "Update Layout And Correct Name",
    tags: [],
    status: "CLOSED",
    cardKey: v4(),
  },
  {
    user: "Sagar",
    title: "Change Label",
    description: "Update Layout And Correct Name",
    tags: ["Layout"],
    status: "IN-TEST",
    cardKey: v4(),
  },
  {
    user: "Ninad",
    title: "Change Label",
    description: "Update Layout And Correct Name",
    tags: ["Layout"],
    status: "TO-DO",
    cardKey: v4(),
  },
  {
    user: "",
    title: "empty_card",
    description: "",
    tags: [],
    status: "TO-DO",
    // cardKey: v4(),
  },
];

export const allColumns = [
  {
    columnName: "TO-DO",
    color: "blue",
    statusAllowedToDrop: ["TO-DO", "IN-PROGRESS"],
  },
  {
    columnName: "IN-PROGRESS",
    color: "orange",
    statusAllowedToDrop: ["TO-DO", "IN-PROGRESS", "COMPLETED"],
  },
  {
    columnName: "COMPLETED",
    color: "red",
    statusAllowedToDrop: ["TO-DO", "COMPLETED", "IN-TEST"],
  },
  {
    columnName: "IN-TEST",
    color: "purple",
    statusAllowedToDrop: ["TO-DO", "IN-TEST", "CLOSED"],
  },
  {
    columnName: "CLOSED",
    color: "green",
    statusAllowedToDrop: ["TO-DO"],
  },
];

// {user:'Akshay',title:'Change Label',description:'update layout',tags:'layout'}

export const isAllowedFrom = (currentStatus, newStatus, allowedFrom) => {
  console.log(currentStatus);

  console.log(allowedFrom);
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
