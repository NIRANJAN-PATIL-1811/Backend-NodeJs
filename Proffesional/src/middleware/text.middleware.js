function textmiddleware(req, res, next) {
  if(req) {
    next();
  }
  else {
    res.send('Can not show text file');
  }
}

export { textmiddleware };