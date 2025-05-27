function getTokenMiddleware(req, res, next) {
  if (req) {
    next();
  }
  else {
    res.send('You can not get token');
  }
}

export default getTokenMiddleware;