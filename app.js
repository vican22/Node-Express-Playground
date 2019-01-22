const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("First middleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Second middleware");
//   res.send("Hello from another midlleware");
// });

app.use("/users", (req, res, next) => {
  console.log("User middleware");
  res.send("<h1>User Profile</h1>");
});

app.use("/", (req, res, next) => {
  console.log("/ middleware");
  res.send("<h1>Home Page</h1>");
});

app.listen(3000);
