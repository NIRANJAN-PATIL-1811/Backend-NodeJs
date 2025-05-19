function videomiddleware(req, res, next) {
  if(req) {
    next();
  }
  else {
    res.send('Can not show video file');
  }
}

export {videomiddleware};