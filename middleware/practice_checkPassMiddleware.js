
function secondMiddleware(req, res, next) {

  if (req.query.pass == "" || req.query.pass == undefined) {
    return res.json(
      {
        msg : "Please enter the password"
      }
    );
  }

  if (req.query.pass != process.env.PASS) {
    return res.json(
      {
        msg : "Please enter the correct password"
      }
    );
  }

  if (req.query.pass == process.env.PASS) {
    next();
  }
}

module.exports = secondMiddleware;