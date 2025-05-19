import { Router } from "express";
import { textmiddleware } from "../middleware/text.middleware.js";

const text_route = Router();

text_route.route('').get(textmiddleware, (req, res) => {
  if(req) {
    res.send('This is text file');
  }
  else {
    res.send('Can not send text file');
  }
});

export default text_route;