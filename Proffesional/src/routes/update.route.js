import { Router } from "express";
import updateMiddleware from "../middleware/update.middleware.js";
import { updateDatabase } from "../controllers/updateDB.controller.js";

const update_route = Router();

update_route.route('').get(updateMiddleware, (req, res) => {
  res.send('This is update file');
  updateDatabase();
});

export default update_route;