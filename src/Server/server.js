const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
// const allColumns = require("./mock");
// import allColumns from "./mock";

const customColumn = [
  {
    columnName: "COMPLETED",
    color: "#14FDBD",
    statusAllowedToDrop: ["TO-DO", "COMPLETED", "IN-TEST"],
    shouldDisplay: true,
  },
  {
    columnName: "CLOSED",
    shouldDisplay: false,
  },
  {
    columnName: "XYZ",
    color: "#14FDBD",
    statusAllowedToDrop: ["TO-DO", "COMPLETED", "IN-TEST"],
    shouldDisplay: true,
  },
];

const cards = [
  {
    user: "Akshay Nivratti Kate",
    title: "Change Label",
    description: "Update Layout And Correct Name",
    tags: ["Layout", "important"],
    status: "TO-DO",
  },
  {
    user: "Suyash Kate",
    title: "Change Label",
    description: "Update Layout And Correct Name",
    tags: ["Layout", "high priority"],
    status: "IN-PROGRESS",
  },
  {
    user: "Atul Dhotre",
    title: "Change Label",
    description: "Update Layout And Correct Name",
    tags: ["Layout"],
    status: "COMPLETED",
  },
  {
    user: "Katke",
    title: "Change Label",
    description: "Update Layout And Correct Name",
    tags: [],
    status: "CLOSED",
  },
  {
    user: "Sagar",
    title: "Change Label",
    description: "Update Layout And Correct Name",
    tags: ["Layout"],
    status: "IN-TEST",
  },
  {
    user: "Ninad",
    title: "Change Label",
    description: "Update Layout And Correct Name",
    tags: ["Layout"],
    status: "TO-DO",
  },
];

// Allow CORS for all routes
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Example route
app.get("/api/columns", (req, res) => {
  res.json({ customColumn });
});

app.get("/api/cards", (req, res) => {
  res.json({ cards });
});

// Example route with dynamic parameter
// app.get("/users/:id", (req, res) => {
//   const userId = req.params.id;
//   res.send(`You requested user with id: ${userId}`);
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
