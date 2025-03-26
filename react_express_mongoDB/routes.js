const express = require('express');
const myroutes = require('./database_logic.js');

const router = express.Router();

router.route('/post').post(myroutes.routeFirst);

module.exports = router;