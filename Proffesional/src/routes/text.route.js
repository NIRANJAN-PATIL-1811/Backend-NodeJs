import { Router } from "express";
import { textmiddleware } from "../middleware/text.middleware.js";
import {checkDatabase} from "../controllers/checkDB.controller.js";

const text_route = Router();

text_route.route('').get(textmiddleware, (req, res) => {
  res.send('This is text file');
  checkDatabase();
});

export default text_route;