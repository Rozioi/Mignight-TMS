/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from 'react';
import './Home.css';
import Slider from '../Slider/slider';
import axios from 'axios';
const Home = () => {
  const api = axios.create({
    baseURL : "http://localhost:8000"
  })
  const [discountShoes, setDiscountShoes] = useState([]);

  const [hoveredShoeId, setHoveredShoeId] = useState(null);

  const handleMouseEnter = (shoeId) => {
    setHoveredShoeId(shoeId);
  };

  const handleMouseLeave = () => {
    setHoveredShoeId(null);
  };

  useEffect(() => {
    api.get("/")
    .then(response => setDiscountShoes(response.data))
    .catch(error => console.error(error));
  }, [])


  return (
    <div style={{ backgroundColor: "white" }}>
      <h3 className='TitleCoperate' >brands</h3>
      <Slider />

      <div className='DiscountShoesList' >

        {discountShoes.map((info) => (
          <div className='Discount-item' key={info.id}>
            <img
              src={hoveredShoeId === info.id ? info.photo2 : info.photo1}
              title={`${info.model}, ${info.styleCode}`}
              onMouseEnter={() => handleMouseEnter(info.id)}
              onMouseLeave={handleMouseLeave}
            />
            <div className='Discount-item-info'>
              <p>{info.model}</p>
              <p style={{ fontSize: "12px", color: "grey" }}>{info.category} {info.style}</p>
              <p><span>${info.NewPrice}</span><span style={{ textDecoration: "line-through" }}>${info.OldPrice}</span></p>
              <p style={{ color: "red" }}>{info.sale}% off</p>
            </div>
          </div>
        ))}

    </div>
    

    </div>
      );
};

      export default Home;
