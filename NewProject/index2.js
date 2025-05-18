const fs = require('node:fs');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.get('/video', (req, res) => {
  res.setHeader('Content-type', 'video/mp4');
  const readfile = fs.createReadStream('/home/roshan/Downloads/Raat.Akeli.Hai.2020.1080p.NF.WEB-DL.Hindi.DDP.5.1.Vegamovies.NL.mkv');
  readfile.pipe(res);
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server is running at http://0.0.0.0:3000/video');
});