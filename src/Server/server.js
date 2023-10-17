const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const { customColumn, cards } = require("./customConfigurations");

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
