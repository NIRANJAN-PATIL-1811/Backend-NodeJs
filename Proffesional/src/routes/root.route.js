import { Router } from "express";

const route_app = Router();

route_app.route('').get((req, res) => {
  res.send('Home page!');
});

export default route_app;