const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

const secretekey = "1234556789";

app.post('/', (req, res) => {
  const user_data = {
    email : req.body.email,
    pass : req.body.pass
  };

  jwt.sign({user_data}, secretekey, {expiresIn : '500s'}, (error, userToken) => {
    if (error) {
      return res.json(
        {
          error
        }
      );
    }
    else {
      return res.json(
        {
          userToken
        }
      );
    }
  });
});


const middlware = (req, res, next) => {
  
  const error_msg = "Token is missing!";

  const getTokenBack = req.query.token;
  if (getTokenBack == "" || getTokenBack == undefined) {
    return res.json(
      {
        error_msg
      }
    );
  }

  next();
};


app.get('/products', middlware, (req, res) => {
  const final_ans = "This is product";
  const user_data = {
    email : req.query.email,
    pass : req.query.pass
  };

  jwt.verify({user_data}, secretekey, (error, user_data) => {
    if (error) {
      return res.json(
        {
          error
        }
      );
    }
    else {
      return res.json(
        {
          final_ans
        }
      );
    }
  });
});

app.listen(8000, "localhost", () => {
  console.log("Server is running on http://localhost:8000");
});