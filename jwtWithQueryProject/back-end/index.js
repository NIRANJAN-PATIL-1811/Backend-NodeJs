const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use(cors());

const email = 'rosh.rp1811@gmail.com';
const password = '123';
const secretkey = 'WinaxisNeerPatil';

function access_token_generation_fun(got_email, got_password) {
  return jwt.sign({email : got_email, password : got_password}, secretkey, {expiresIn : '60s'});
}

function refresh_token_generation_fun(got_email, got_password) {
  return jwt.sign({email : got_email, password : got_password}, secretkey, {expiresIn : '1d'});
}

function checkAccessToken(req, res, next) {
  const veri = req.headers.authorization.split(' ')[1];
  jwt.verify(veri, secretkey, (error, data) => {
    if (error) {
      return res.status(403).json({ msg : 'Refresh Token has been expired' });
    }
    else {
      next();
    }
  });
}

app.post('/api/getAccessToken', checkAccessToken, (req, res) => {
  const ans = access_token_generation_fun(email, password);
  return res.status(200).json(
    {
      ans : ans
    }
  );
});


function Mymiddleware(req, res, next) {

  const got_email = req.body.email;
  const got_password = req.body.password;


  if (got_email === email && got_password === password) {
    req.access_token = access_token_generation_fun(got_email, got_password);

    req.refresh_token = refresh_token_generation_fun(got_email, got_password);
    
    next();
  }
  else {
    return res.status(400).json({ msg : 'Login Credentials Are Not Valid' });
  }  
}


app.post('/api/login_request', Mymiddleware, (req, res) => {
  return res.status(200).json({ access_token : req.access_token, refresh_token : req.refresh_token });
});


function checkToken(req, res, next) {
  const veri = req.headers.authorization.split(' ')[1];
  jwt.verify(veri, secretkey, (error, data) => {
    if (error) {
      return res.status(401).json({ msg : 'Access Token has been expired' });
    }
    else {
      next();
    }
  });
}

app.post('/api/product', checkToken, (req, res) => {
  return res.status(200).json({ msg : 'You clicked on Product' });
});


app.post('/api/contact', checkToken, (req, res) => {
  return res.status(200).json({ msg : 'You clicked on Contact' });
});


app.post('/api/about', checkToken, (req, res) => {
  return res.status(200).json({ msg : 'You clicked on About' });
});


app.listen(8000, 'localhost', () => {
  console.log('Server is running on http://localhost:80000');
});