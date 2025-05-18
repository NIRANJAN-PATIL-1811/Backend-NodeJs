const fs = require('node:fs');
const express = require('express');
const cors = require('cors');

console.log('Script is started!!');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/video', (req, res) => {
  const videoPath = '/home/roshan/Downloads/Bramayugam.2024.1080p.SONY.WEB-DL.AAC2.0.H.264.Vegamovies.to.mkv';  
  res.setHeader('Content-type', 'video/mp4');
  const readfile = fs.createReadStream(videoPath);
  readfile.pipe(res);
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server is running at http://localhost:3000');
});