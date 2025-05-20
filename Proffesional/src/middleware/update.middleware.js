function updateMiddleware(req, res, next) {
  if(req) {
    next();
  }
  else {
    res.send('Can not show update file');
  }
}

export default updateMiddleware;