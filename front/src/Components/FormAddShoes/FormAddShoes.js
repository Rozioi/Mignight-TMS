import React, { useState } from 'react';
import './FormAddShoes.css';
import axios from 'axios';


const CarForm = () => {
  const api = axios.create({
    baseURL : "http://localhost:8000"
  })

  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [company, setCompany] = useState('');
  const [color, setColor] = useState('');
  const [material, setMaterial] = useState('');
  const [category, setCategory] = useState('');
  const [style, setStyle] = useState('');
  const [status, setStatus] = useState('');
  const [styleCode, setStyleCode] = useState('');
  const [NowPrice, setNowPrice] = useState('');
  const [sale, setSale] = useState('');
  const [photo1, setPhoto1] = useState('');
  const [photo2, setPhoto2] = useState('');

  const handleSubmit = (e) => {
    api.post("/shoes-add",{name,model,year,company,color,material,category,style,status,styleCode,NowPrice,sale, photo1,photo2})
    e.preventDefault();
  };

  return (
    <div>
      <h1>Введите данные о кроссовках</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Название:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Модель:
          <input type="text" value={model} onChange={(e) => setModel(e.target.value)} />
        </label>
        <br />
        <label>
          Компания:
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
        </label>
        <br />
        <label>
          <p>Фотографии:</p>
          <input type='text' value={photo1} onChange={(e) => setPhoto1(e.target.value)} />
          <input type='text' value={photo2} onChange={(e) => setPhoto2(e.target.value)} />
        </label>
        <br />
        <label>
          Материалы:
          <input type="text" value={material} onChange={(e) => setMaterial(e.target.value)} />
        </label>
        <br />
        <label>
          Год выпуска:
          <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
        </label>
        <br />
        <label>
          Цвет:
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
        </label>
        <br />
        <label>
          Категория:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </label>
        <br />
        <label>
          Стиль:
          <input type="text" value={style} onChange={(e) => setStyle(e.target.value)} />
        </label>
        <br />
        <label>
          Статус:
          <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
        </label>
        <br />
        <label>
          Код стиля:
          <input type="text" value={styleCode} onChange={(e) => setStyleCode(e.target.value)} />
        </label>
        <br />
        <label>
          Цена без скидки:
          <input type="number" value={NowPrice} onChange={(e) => setNowPrice(e.target.value)} />
        </label>
        <br />
        <label>
          Скидка:
          <input type="number" value={sale} onChange={(e) => setSale(e.target.value)} />
        </label>
        <label>
          Цена со скидкой:
          <p>{NowPrice - (NowPrice * (sale / 100))}</p>
        </label>
        <br />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default CarForm;