
// https://www.youtube.com/watch?v=nDtnC64xuAQ&list=PLjVLYmrlmjGea6t69mKA0t7ak6ncqOEoE&index=9:

const express = require("express");

const firstMiddleware = require("./practice_checkTokenMiddleware.js");
const secondMiddleware = require("./practice_checkPassMiddleware.js");
require('dotenv').config();


const app = express();

app.use(express.json());

// let token = '12345';
// let pass = '123';

// function firstMiddleware(req, res, next) {
//   if (req.query.token == "" || req.query.token == undefined) {
//     return res.json(
//       {
//         msg : "Please enter the token"
//       }
//     );
//   }

//   if (req.query.token != token) {
//     return res.json(
//       {
//         msg : "Please enter the correct token"
//       }
//     );
//   }

//   if (req.query.token == token) {
//     next();
//   }
// }


// function secondMiddleware(req, res, next) {

//   if (req.query.pass == "" || req.query.pass == undefined) {
//     return res.json(
//       {
//         msg : "Please enter the password"
//       }
//     );
//   }

//   if (req.query.pass != pass) {
//     return res.json(
//       {
//         msg : "Please enter the correct password"
//       }
//     );
//   }

//   if (req.query.pass == pass) {
//     next();
//   }
// }

app.use(firstMiddleware);
app.use(secondMiddleware);

app.get('/news', (req, res) => {
  res.json(
    {
      msg : "Hi, This is news"
    }
  );
});

app.listen(8000, "localhost", () => {
  console.log("Server is running on http://localhost:8000/");
});