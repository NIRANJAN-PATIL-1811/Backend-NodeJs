import express from 'express';
import app from "./app.js";
import cors from 'cors';
import 'dotenv/config';

import root_route from './routes/root.route.js';
import text_route from './routes/text.route.js';
import video_route from './routes/video.route.js';


app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use('/', root_route);
app.use('/text', text_route);
app.use('/video', video_route);

app.listen(process.env.PORT, 'localhost', () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});