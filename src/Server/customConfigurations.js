const customColumn = [
  //   {
  //     columnName: "COMPLETED",
  //     color: "#14FDBD",
  //   },
  //   {
  //     columnName: "CLOSED",
  //     shouldDisplay: true,
  //   },
  //   {
  //     columnName: "REOPENED",
  //     color: "red",
  //     statusAllowedToDrop: ["TO-DO"],
  //     shouldDisplay: true,
  //   },
  //   {
  //     columnName: "IN-TEST",
  //     statusAllowedToDrop: ["TO-DO", "REOPENED"],
  //     shouldDisplay: true,
  //   },
];

const cards = [
  {
    user: "Akshay Nivratti Kate",
    title: "Deployment",
    description: "Deploy modules into production",
    tags: ["Important"],
    status: "TO-DO",
  },
  {
    user: "Suyash K",
    title: "API Readiness",
    description: "Create update api call",
    tags: ["Backend", "High Priority"],
    status: "IN-PROGRESS",
  },
  {
    user: "Atul D",
    title: "Defect Fixes",
    description: "Fix all defect",
    tags: ["Layout", "Minor"],
    status: "COMPLETED",
  },
  {
    user: "Sudeep M",
    title: "API Readiness",
    description: "Create read api call",
    tags: [],
    status: "CLOSED",
  },
  {
    user: "Sagar Deshpande",
    title: "Unit Test Cases",
    description: "Add unit test cases for all modules",
    tags: ["test cases"],
    status: "IN-TEST",
  },
  {
    user: "Ninad P",
    title: "Testing",
    description: "User acceptance testing",
    tags: ["UAT"],
    status: "TO-DO",
  },
];

exports.customColumn = customColumn;
exports.cards = cards;
