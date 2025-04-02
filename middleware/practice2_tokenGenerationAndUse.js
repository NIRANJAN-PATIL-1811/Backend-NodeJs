const express = require("express");
const jwt = require("jsonwebtoken");

const skey = '12345';

const app = express();

app.post('/', (request, response) => {
  const user_data = {
    username : "niranjan",
    password : '123'
  };

  jwt.sign({user_data}, skey, {expiresIn : '300s'}, (error, myToken) => {
    if (error) {
      return response.json(
        {
          error
        }
      );
    }
    else {
      return response.json(
        {
          myToken
        }
      );
    }
  });
});

const mymiddleware = (request, response, next) => {
  const getTokenBack = request.headers['authorization'];

  if (getTokenBack == undefined) {
    return response.json(
      {
        msg : "Token is not present!"
      }
    );
  }
  else {
    const myToken = getTokenBack.split(' ')[0];
    request.myToken = myToken;
  }

  next();
};

app.post('/products', mymiddleware, (request, response) => {
  jwt.verify(request.myToken, skey, (error, actualData) => {
    if (error) {
      return response.json(
        {
          error
        }
      );
    }
    else {
      return response.json(
        {
          msg : "This is the product"
        }
      );
    }
  });
});

app.listen(8000, "localhost", () => {
  console.log("Server is running on http://localhost:8000/");
});