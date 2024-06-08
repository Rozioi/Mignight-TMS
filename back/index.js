const express = require('express');
const multer = require('multer'); // Middleware для обработки файлов
const path = require('path');
const db = require('./db.js');
const cors = require('cors');
const { error } = require('console');

const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());





app.get("/all-shoes", (req,res) => {
  db.query(`SELECT * FROM "Shoes"`,(err,rows) =>{
    if(err){
      res.status(500).json({error: 'Произошла ошибка при получении списка кроссовок на скидке'})
    }else{
      res.status(200).json(rows.rows);
    }
  })
});

app.get("/discountShoes", (req,res) => {
  db.query(`SELECT * FROM "Shoes" WHERE "status" IN ('discount')`,(err,rows) =>{
    if(err){
      res.status(500).json({error: 'Произошла ошибка при получении списка кроссовок на скидке'})
    }else{
      res.status(200).json(rows.rows);
    }
  })
});
app.get("/shoes-company", (req,res) =>{
  db.query(`SELECT company FROM "Shoes"`, (err,row) =>{
    if(err){
      res.status(500).json({error: 'Произошла ошибка при получении компаний'});
    }else{
      res.status(200).json(row.rows)
    }
  })
});
app.get("/shoes-style",(req,res) =>{
  db.query(`SELECT style FROM "Shoes"`, (err,row) =>{
    if(err){
      res.status(500).json({error: 'Произошла ошибка при получении стилей'});
    }else{
      res.status(200).json(row.rows)
    }
  })
});
app.get("/shoes-category",(req,res) =>{
  db.query(`SELECT category FROM "Shoes"`, (err,row) =>{
    if(err){
      res.status(500).json({error: 'Произошла ошибка при получении категорий'});
    }else{
      res.status(200).json(row.rows)
    }
  })
});
app.get("/search-shoes/:search", (req,res) =>{
  const {search} = req.params;
  db.query(`SELECT * FROM "Shoes" WHERE model LIKE '%${search}%'`,(err,row) =>{
    if(err){
      res.status(500).json({error: 'Произошла ошибка при поиске'});
    }else{
      res.status(200).json(row.rows)
    }
  })
})
app.get("/shoes-models", (req,res) =>{
  db.query(`SELECT model FROM "Shoes"`, (err,row) =>{
    if(err){
      res.status(500).json({error: 'Произошла ошибка при получении моделей кроссовок'});
    }else{
      res.status(200).json(row.rows)
    }
  })
})
app.post("/shoes-add", (req,res) => {
  const {name,model,year,company,color,material,category,style,status,styleCode,NowPrice,sale, photo1,photo2} = req.body;
  let OldPrice = NowPrice;
  let NewPrice = NowPrice - (NowPrice * (sale / 100));
  const sql = `INSERT INTO "Shoes" ("name","model","year","company","color","material","category","style","status","styleCode","NewPrice","OldPrice","sale","photo1","photo2") 
  VALUES ('${name}','${model}','${year}','${company}','${color}','${material}','${category}','${style}','${status}','${styleCode}',${NewPrice},${OldPrice},${sale},'${photo1}','${photo2}')`;
  db.query(sql, (err,row) =>{
    if(err){
      res.status(500).json({error: 'Произошла ошибка при добавлении'})
    }else{
      res.status(200).json({message: 'Кроссовок добавлен'})
    }
  })
});



app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
