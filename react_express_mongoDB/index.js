const express = require('express');
const cors = require('cors');

const routes = require('./routes.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

app.use('/api', routes);

app.listen(8000, 'localhost', () => {
  console.log("Server is running at http://localhost:8000/");
});