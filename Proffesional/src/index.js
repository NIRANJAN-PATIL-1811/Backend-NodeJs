const http = require('node:http');

http.createServer((req, res) => {
  res.end('hello');
}).listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

controllers
db
middleware
models
routes
utils
app.js
constants.js
index.js