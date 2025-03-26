function routeFirst(req, res) {
  console.log(req.body);
  console.log(req.body.full_name, req.body.email, req.body.age);

  res.json(
    {
      'msg' : 'Success!'
    }
  );
}

module.exports = {routeFirst};