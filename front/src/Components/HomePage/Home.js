/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from 'react';
import './Home.css';
import Slider from '../Slider/slider';

const Home = () => {
  const [shoes, setShoes] = useState([
    {
      id: 1,
      name: "New Balance 2002R",
      model: "2002R",
      year: "2010",
      company: "New Balance",
      color: "Black with phantom and gunmetal",
      material: "Premium suede and mesh upper",
      category: "Unisex",
      style: "Lifestyle",
      status: "not a discount",
      styleCode: "M2002RBK",
      NewPrice: "$144.99",
      OldPrice: "$144.99 ",
      sale: "0%",
      photo1: "https://nb.scene7.com/is/image/NB/m2002rbk_nb_02_i?$pdpflexf2$&amp;wid=440&amp;hei=440",
      photo2: "https://nb.scene7.com/is/image/NB/m2002rbk_nb_05_i?$pdpflexf2$&amp;wid=440&amp;hei=440"


    }, {
      id: 2,
      name: "New Balance 2002R",
      model: "2002R",
      year: "2010",
      company: "New Balance",
      color: "Sandstone with magnet and linen",
      material: "Mesh upper with suede overlays",
      category: "Unisex",
      style: "Lifestyle",
      status: "discount",
      styleCode: "M2002RFA",
      NewPrice: "$115,99",
      OldPrice: "$144.99",
      sale: "20%",
      photo1: "https://nb.scene7.com/is/image/NB/m2002rfa_nb_02_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=440&hei=440",
      photo2: "https://nb.scene7.com/is/image/NB/m2002rfa_nb_05_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=440&hei=440"
    }, {
      id: 3,
      name: "New Balance 2002R",
      model: "2002R",
      year: "2010",
      company: "New Balance",
      color: "Calm taupe with angora and silver metalic",
      material: "Suede and mesh upper for style and comfort",
      category: "Unisex",
      style: "Lifestyle",
      status: "discount",
      styleCode: "M2002RCC",
      NewPrice: " $115,99",
      OldPrice: "$144.99",
      sale: "20%",
      photo1: "https://nb.scene7.com/is/image/NB/m2002rcc_nb_02_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=440&hei=440",
      photo2: "https://nb.scene7.com/is/image/NB/m2002rcc_nb_05_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=440&hei=440"
    }, {
      id: 4,
      name: "New Balance 2002R",
      model: "2002R",
      year: "2010",
      company: "New Balance",
      color: "Steel with lead and orca",
      material: "Premium suede and mesh upper",
      category: "Unisex",
      style: "Lifestyle",
      status: "discount",
      styleCode: "M2002RST",
      NewPrice: "$115,99 ",
      OldPrice: "$144.99",
      sale: "20%",
      photo1: "https://nb.scene7.com/is/image/NB/m2002rst_nb_02_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=440&hei=440",
      photo2: "https://nb.scene7.com/is/image/NB/m2002rst_nb_05_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=440&hei=440"
    }, {
      id: 5,
      name: "New Balance 2002R",
      model: "2002R",
      year: "2010",
      company: "New Balance",
      color: "Orb pink with shadow grey and silver metallic",
      material: "Mesh upper with suede overlays",
      category: "Unisex",
      style: "Lifestyle",
      status: "discount",
      styleCode: "M2002RFC",
      NewPrice: "$130,49",
      OldPrice: "$144.99",
      sale: "10%",
      photo1: "https://nb.scene7.com/is/image/NB/m2002rfc_nb_02_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=440&hei=440",
      photo2: "https://nb.scene7.com/is/image/NB/m2002rfc_nb_05_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=440&hei=440"
    }, {
      id: 6,
      name: "New Balance 2002R",
      model: "2002R",
      year: "2010",
      company: "New Balance",
      color: "Copper with infield clay and sea salt",
      material: "Mesh upper with suede overlays",
      category: "Unisex",
      style: "Lifestyle",
      status: "discount",
      styleCode: "M2002RFJ",
      NewPrice: "$101,49",
      OldPrice: "$144.99",
      sale: "30%",
      photo1: "https://nb.scene7.com/is/image/NB/m2002rfj_nb_02_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=440&hei=440",
      photo2: "https://nb.scene7.com/is/image/NB/m2002rfj_nb_05_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=440&hei=440"
    }, {
      id: 7,
      name: "New Balance 2002R",
      model: "2002R",
      year: "2010",
      company: "New Balance",
      color: "Magnet with lead and blue fox",
      material: "Mesh upper with suede overlays",
      category: "Unisex",
      style: "Lifestyle",
      status: "discount",
      styleCode: "M2002RFB",
      NewPrice: "$115,99",
      OldPrice: "$144.99",
      sale: "20%",
      photo1: "https://nb.scene7.com/is/image/NB/m2002rfb_nb_02_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=440&hei=440",
      photo2: "https://nb.scene7.com/is/image/NB/m2002rfb_nb_05_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=440&hei=440"
    }, {
      id: 8,
      name: "New Balance 2002RX Gore-Tex®",
      model: "2002RX Gore-Tex®",
      year: "2010",
      company: "New Balance",
      color: "Black coffee with sandstone and stoneware",
      material: "Mesh upper with nubuck overlays and GORE-TEX® waterproof fabric protects feet from wind, rain and water without sacrificing breathability",
      category: "Men's",
      style: "Lifestyle",
      status: "discount",
      styleCode: "M2002RXQ",
      NewPrice: "$161.99",
      OldPrice: "$179.99",
      sale: "10%",
      photo1: "https://nb.scene7.com/is/image/NB/m2002rxq_nb_02_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=440&hei=440",
      photo2: "https://nb.scene7.com/is/image/NB/m2002rxq_nb_05_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=440&hei=440"
    }, {
      id: 9,
      name: "New Balance 2002R",
      model: "2002R",
      year: "2010",
      company: "New Balance",
      color: "Linen with concrete and slate grey",
      material: "Suede and mesh upper",
      category: "Men's",
      style: "Lifestyle",
      status: "discount",
      styleCode: "M2002REK",
      NewPrice: "$130,49",
      OldPrice: "$144.99",
      sale: "10%",
      photo1: "https://nb.scene7.com/is/image/NB/m2002rek_nb_02_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=440&hei=440",
      photo2: "https://nb.scene7.com/is/image/NB/m2002rek_nb_05_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=440&hei=440"
    }
  ]);
  const [discountShoes, setDiscountShoes] = useState([]);

  const [hoveredShoeId, setHoveredShoeId] = useState(null);

  const handleMouseEnter = (shoeId) => {
    setHoveredShoeId(shoeId);
  };

  const handleMouseLeave = () => {
    setHoveredShoeId(null);
  };

  useEffect(() => {
    setDiscountShoes(shoes.filter(shoes => shoes.status === "discount"));
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
              <p><span>{info.NewPrice}</span><span style={{ textDecoration: "line-through" }}>{info.OldPrice}</span></p>
              <p style={{ color: "red" }}>{info.sale} off</p>
            </div>
          </div>
        ))}

    </div>
    

    </div>
      );
};

      export default Home;
