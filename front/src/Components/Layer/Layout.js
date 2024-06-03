import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { FaMobile, FaMobileScreen } from "react-icons/fa6";
import { RiComputerFill, RiComputerLine } from "react-icons/ri";

import './Layout.css'

const Layout = () => {
  const [isComputer, setIsComputer] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [isAvaible, setIsAvaible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleComputerClick = () => {
    setIsComputer(!isComputer);
    setIsPhone(false);
    setIsAvaible(true);
  };

  const handlePhoneClick = () => {
    setIsPhone(!isPhone);
    setIsComputer(false);
    setIsAvaible(true);
    
  };

  return (
    <div className='site-divided'>
      {
        isLoaded ? <>
          {isComputer ? <Header /> : <></>}
          <main style={{ height: "85%" }}>
            <Outlet />
          </main>
          {isPhone ? <Header /> : <></>}
        </>
          : <div className="device-selection">
          <p>Выберите устройство с которого выполнен вход</p>
          <p onClick={handleComputerClick}>
            {isComputer ? <RiComputerFill /> : <RiComputerLine />}
          </p>
          <p onClick={handlePhoneClick}>
            {isPhone ? <FaMobile /> : <FaMobileScreen />}
          </p>
          {isAvaible ? (
            <button onClick={() => setIsLoaded(true)}>Выбрать</button>
          ) : (
            <></>
          )}
        </div>
      }

    </div>


  )
}

export default Layout