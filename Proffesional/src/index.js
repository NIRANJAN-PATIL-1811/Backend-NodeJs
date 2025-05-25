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
import relation_route from './routes/relation.route.js';
import { connectDB } from './db/mydb.db.js';

if(cluster.isPrimary) {
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`${worker.process.pid} is died getting new one as replacement`);
    cluster.fork();
  });
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
    app.use('/relation', relation_route);
  
    app.listen(process.env.PORT, 'localhost', () => {
      console.log(`${process.pid} Server is running at http://localhost:${process.env.PORT}`);
    });
    }
  
  main();
}