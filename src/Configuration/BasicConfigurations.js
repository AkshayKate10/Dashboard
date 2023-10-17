import { STATUS } from "../Helper/constants";

export const allColumns = [
  {
    columnName: STATUS.TODO,
    color: "blue",
    statusAllowedToDrop: [STATUS.INPROGRESS],
    shouldDisplay: true,
  },
  {
    columnName: STATUS.INPROGRESS,
    color: "orange",
    statusAllowedToDrop: [STATUS.TODO, STATUS.COMPLETED],
    shouldDisplay: true,
  },
  {
    columnName: STATUS.COMPLETED,
    color: "red",
    statusAllowedToDrop: [STATUS.TODO, STATUS.INTEST],
    shouldDisplay: true,
  },
  {
    columnName: STATUS.INTEST,
    color: "purple",
    statusAllowedToDrop: [STATUS.TODO, STATUS.CLOSED],
    shouldDisplay: true,
  },
  {
    columnName: STATUS.CLOSED,
    color: "green",
    statusAllowedToDrop: [STATUS.TODO],
    shouldDisplay: true,
  },
];
