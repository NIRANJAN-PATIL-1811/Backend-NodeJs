const http = require('http');

let server = http.createServer((req, res) => {

  let myobj = {
    f_name : "niranjan",
    address : {
        pin : 411035,
        gali : "42 sector",
        landmark : "MD"
      }
  };

  if (req.url == "/user") {
    res.end(JSON.stringify(myobj));
  }

  if (req.url == "/common") {
    res.end("hi");
  }
  
});


server.listen(8000);