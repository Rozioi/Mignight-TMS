import React, { useState } from 'react';
import { BsBasket2, BsBasket2Fill, BsCreditCard, BsCreditCardFill, BsShopWindow, BsBox, BsBoxFill, BsBell, BsBellFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { FaUserLarge } from "react-icons/fa6";

import "./Header.css"
import axios from 'axios';

const Header = () => {
  const [IsActiveBellMenu, setIsActiveBellMenu] = useState(false);
  const [id, setId] = useState('asassada');
  const [searchQuery, setSearchQuery] = useState(''); 
  const setActive = ({ isActive }) => isActive ? "navlink-active" : "navlink-offline"
const api = axios.create({
  baseURL : "http://localhost:8000"
});
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    api.get(`/search-shoes/${e.target.value}`)
    .then(response => console.log(response.data))
    .catch(error => console.error(error))
  }

  

  return (
    <header>
      <NavLink className={setActive} to={"/"}>
        <img src="https://i.ibb.co/FBKScSR/OIG3-BAFQ-removebg-preview.png" alt="OIG3-BAFQ-removebg-preview" border="0" />

      </NavLink>
      <NavLink className={setActive} to={"/catalog"}>
        <BsShopWindow />

      </NavLink>

      <div className="bell-menu" onClick={() => setIsActiveBellMenu(!IsActiveBellMenu)}>
        {IsActiveBellMenu ? <BsBellFill /> : <BsBell />}

      </div>

      <div className="search-input-header">
        <input type="search" placeholder="Поиск" value={searchQuery} onChange={handleSearch} />
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