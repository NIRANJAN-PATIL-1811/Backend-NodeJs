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
          msg : error
        }
      );
    }
    else {
      // console.log("type is ->", typeof userToken);
      // console.log(userToken);
      return res.json(
        {
          msg : userToken
        }
      );
    }
  });
});


const middlware = (req, res, next) => {
  
  const error_msg = "Token is missing!";

  const token = req.headers.authorization.split(' ')[1];

  if (token == "" || token == undefined) {
    return res.json(
      {
        msg : error_msg
      }
    );
  }
  req.userToken = token;
  next();
};


app.post('/products', middlware, (req, res) => {
  
  // console.log(first);
  const final_ans = "This is product";
  // const user_data = {
  //   email : req.query.email,
  //   pass : req.query.pass
  // };

  jwt.verify(req.userToken, secretekey, (error, user_data) => {
    if (error) {
      return res.json(
        {
          msg : error
        }
      );
    }
    else {
      return res.json(
        {
          msg : final_ans
        }
      );
    }
  });
});

app.listen(8000, "localhost", () => {
  console.log("Server is running on http://localhost:8000");
});