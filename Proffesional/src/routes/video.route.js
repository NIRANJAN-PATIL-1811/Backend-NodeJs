import { Router } from "express";
import { videomiddleware } from "../middleware/video.middleware.js";
import { retriveData } from "../controllers/checkDB.controller.js";

const video_route = Router();

video_route.route('').get(videomiddleware, (req, res) => {
  res.send('This is video file');
  retriveData();
});

export default video_route;