import React, { useState } from 'react'
import { BsBasket2, BsBasket2Fill, BsCreditCard, BsCreditCardFill, BsShopWindow, BsBox, BsBoxFill, BsBell, BsBellFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { FaUserLarge } from "react-icons/fa6";

import "./Header.css"

/*
BsBasket2,BsBasket2Fill  это корзина товаров,
BsCreditCard, BsCreditCardFill это данные для оплаты,
BsShopWindow это котолог товаров,
BsBox,BsBoxFill  это доставки,
BsBell ,BsBellFill это уведомления
*/

const Header = () => {
  const [IsActiveBellMenu, setIsActiveBellMenu] = useState(false);
  const [id, setId] = useState('asassada');
  const setActive = ({ isActive }) => isActive ? "navlink-active" : "navlink-offline"
  return (
    <header>
      <NavLink className={setActive} to={"/"}>
        <img src="https://i.ibb.co/FBKScSR/OIG3-BAFQ-removebg-preview.png" alt="OIG3-BAFQ-removebg-preview" border="0" />
      </NavLink>
      <NavLink className={setActive} to={"/catalog"}>
        <BsShopWindow />
      </NavLink>

      <NavLink className={setActive} to={"/delivery"}>
        {({ isActive }) => (
          <span>
            {isActive ? <BsBoxFill /> : <BsBox />}
          </span>
        )}
      </NavLink>

      <div className="bell-menu" onClick={() => setIsActiveBellMenu(!IsActiveBellMenu)}>
        {IsActiveBellMenu ? <BsBellFill /> : <BsBell />}
      </div>

      <NavLink className={setActive} to={`/profile/${id}`}>
        <FaUserLarge />
      </NavLink>

      <NavLink className={setActive} to={"/basket"}>
        {({ isActive }) => (
          <span>
            {isActive ? <BsBasket2Fill /> : <BsBasket2 />}
          </span>
        )}
      </NavLink>
    </header>
  )
}

export default Header