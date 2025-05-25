import { Router } from "express";
import relationMiddleware from "../middleware/relation.middleware.js";
import { relationUserFun, relationPostFun, relationGetFun } from '../controllers/relation.controller.js';


const relation_route = Router();

relation_route.route('').post(relationMiddleware, (req, res) => {
  relationUserFun();
  res.send('Details saved!');
});

relation_route.route('/post').post(relationMiddleware, (req, res) => {
  relationPostFun();
  res.send('Details of post are saved!');
});

relation_route.route('/result').get(relationMiddleware, async (req, res) => {
  try {
    const ans = await relationGetFun();
    res.json(ans);
  } catch (err) {
    res.status(500).send('Error getting result');
  }
});

export default relation_route;