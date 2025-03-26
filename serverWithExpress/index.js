const express = require('express');

const app = express();

app.get("/", (req, res) => {
  res.send("hi");
});

app.get("/products", (req, res) => {
  res.json(
    {
      status : 1,
      msg : "Success!"
    }
  );
});

app.listen(8000, "localhost", () => {
  console.log("Server is running on http://localhost:8000/");
});