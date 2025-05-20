import cluster from 'cluster';
import os from "os";
import express from 'express';
import app from "./app.js";
import cors from 'cors';
import 'dotenv/config';

import root_route from './routes/root.route.js';
import text_route from './routes/text.route.js';
import video_route from './routes/video.route.js';
import update_route from './routes/update.route.js';
import { connectDB } from './db/mydb.db.js';

if(cluster.isPrimary) {
  for (let i = 0; i < os.cpus.length + 1; i++) {
    cluster.fork();
  }
}
else {
  async function main() {

    await connectDB();
  
    app.use(cors());
    app.use(express.urlencoded({extended : true}));
    app.use(express.json());
  
    app.use('/', root_route);
    app.use('/text', text_route);
    app.use('/video', video_route);
    app.use('/update', update_route);
  
    app.listen(process.env.PORT, 'localhost', () => {
      console.log(`Server is running at http://localhost:${process.env.PORT}`);
    });
    }
  
  main();
}



