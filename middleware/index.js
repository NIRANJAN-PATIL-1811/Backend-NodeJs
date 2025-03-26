const express = require('express');
const checkToken = require('./checkTokenMiddleware.js');
require('dotenv').config();

const app = express();


// let myMiddleware = (req, res, next) => {
//   if (req.query.token == "" || req.query.token == undefined) {
//     return res.send("Token is empty!");
//   }

//   if (req.query.token != myToken) {
//     return res.send("Token not matched!");
//   }  
//   next();

// };

// app.use(myMiddleware);


// Below checktoken is attached at routing level
app.get('/products', checkToken, (req, res) => { 
  return res.json(
    {
      msg : "Success!"
    }
  );
});


app.listen(process.env.PORT, "localhost", (req, res) => {
  console.log("Server is running on http://localhost:8000/");
});