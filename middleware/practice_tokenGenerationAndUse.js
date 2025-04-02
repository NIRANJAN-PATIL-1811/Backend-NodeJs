const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

const secretkey = 'secretkey';

function middleware(req, res, next) {
  const gettoken = req.headers['authorization'];

  if (gettoken !== undefined) {
    const newtoken = gettoken.split(' ')[0];
    req.token = newtoken;
  }

  next();
}

const user_data = {
  user_name : "niranjan",
  password : 123
}

app.post('/', (req, res) => {
  jwt.sign({user_data}, secretkey, {expiresIn : '300s'}, (err, token) => {
    if (err) {
      return res.json(
        {
          msg : "Error"
        }
      );
    }
    else {
      return res.json(
        {
          token
        }
      );
    }
  });
});

app.post('/products', middleware, (req, res) => {

  jwt.verify(req.token, secretkey, (err, authData) => {
    if (err) {
      return res.json(
        {
          msg : "Error"
        }
      );
    }
    else {
      return res.json(
        {
          authData
        }
      );
    }
  });
});

app.listen(8000, "localhost", () => {
  console.log("Server is running on http://localhost:8000/");
});