let myMiddleware = (req, res, next) => {
  if (req.query.token == "" || req.query.token == undefined) {
    return res.send("Token is empty!");
  }

  if (req.query.token != process.env.MYTOKEN) {
    return res.send("Token not matched!");
  }  
  next();

};

module.exports = myMiddleware;