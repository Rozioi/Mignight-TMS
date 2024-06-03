import React, { useState } from 'react';
import './cart.css';
const CarForm = () => {
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [company, setCompany] = useState('');
  const [photo1, setPhoto1] = useState('');
  const [photo2, setPhoto2] = useState('');
  const [materials, setMaterials] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      model,
      company,
      photo1,
      photo2,
      materials,
      year,
    });
  };

  return (
    <div>
      <h1>Введите данные о машине</h1>
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
          <input type='text' onChange={(e) => setPhoto1(e.target.value)} />
          
          <input type='text' onChange={(e) => setPhoto2(e.target.value)} />
        </label>
        <br />
        <label>
          Материалы:
          <input type="text" value={materials} onChange={(e) => setMaterials(e.target.value)} />
        </label>
        <br />
        <label>
          Год выпуска:
          <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
        </label>
        <br />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default CarForm;