const express = require('express');
const multer = require('multer'); // Middleware для обработки файлов
const path = require('path');
const db = require('./db.js');
const cors = require('cors');

const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());

// Настройка директории для загрузки файлов
// const uploadDirVideo = path.join("./uploads", 'video');
// const uploadDirImage = path.join("./uploads", 'image_poster');

// const storageVideo = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, uploadDirVideo);
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   }
// });

// const storageImagePoster = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, uploadDirImage);
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   }
// });

// const uploadVideo = multer({ storage: storageVideo });
// const uploadImagePoster = multer({ storage: storageImagePoster });

// // Маршрут для загрузки видеофайла
// app.post('/upload/video', uploadVideo.single('video'), (req, res) => {
//   res.send('Видео успешно загружено');
// });

// // Маршрут для загрузки изображения-постера
// app.post('/upload/image', uploadImagePoster.single('image'), (req, res) => {
//   res.send('Изображение успешно загружено');
// });

app.post("/set-anime", (req, res) => {
  const {id,title,episode, description, release} = req.body;

  const sql ="INSERT ";
  db.query(sql, (err,row) => {
    if(err){
      res.send(err);
    }else{
      res.send("Anime added")
    }
  });
});
app.get("/get-anime", (req, res) => {
  // Выполнение запроса к базе данных для получения списка видео
  const sql = "SELECT * FROM anime";

  db.query(sql, (error, result) => {
    if (error) {
      console.error('Ошибка выполнения SQL-запроса:', error);
      res.status(500).json({ error: 'Произошла ошибка при получении списка видео.' });
    } else {
      console.log('Список видео успешно получен из базы данных.');
      res.status(200).json(result.rows); // Предполагается, что результат является массивом объектов с видео
    }
  });
});


// Маршрут для скачивания видеофайла
app.get('/download/video/:filename', (req, res) => {
  const filename = req.params.filename;
  res.download(path.join(uploadDirVideo, filename));
});

// Маршрут для скачивания изображения-постера
app.get('/download/image/:filename', (req, res) => {
  const filename = req.params.filename;
  res.download(path.join(uploadDirImage, filename));
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
