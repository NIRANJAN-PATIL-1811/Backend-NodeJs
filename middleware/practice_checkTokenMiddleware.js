
function firstMiddleware(req, res, next) {
  if (req.query.token == "" || req.query.token == undefined) {
    return res.json(
      {
        msg : "Please enter the token"
      }
    );
  }

  if (req.query.token != process.env.MYTOKEN) {
    return res.json(
      {
        msg : "Please enter the correct token"
      }
    );
  }

  if (req.query.token == process.env.MYTOKEN) {
    next();
  }
}


module.exports = firstMiddleware;