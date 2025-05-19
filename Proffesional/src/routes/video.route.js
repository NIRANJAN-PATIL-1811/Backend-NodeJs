import { Router } from "express";
import { videomiddleware } from "../middleware/video.middleware.js";

const video_route = Router();

video_route.route('').get(videomiddleware, (req, res) => {
  if(req) {
    res.send('This is video file');
  }
  else {
    res.send('Can not send video file');
  }
});

export default video_route;