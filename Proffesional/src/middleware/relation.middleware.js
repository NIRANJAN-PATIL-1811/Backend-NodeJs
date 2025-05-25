function relationMiddleware(req, res, next) {
  if (req) {
    next();
  }
  else {
    console.log('Can not insert the pre-defined data.');
  }
}

export default relationMiddleware;