import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/HomePage/Home";
import Layout from "./Components/Layer/Layout";



const App = () => {
  return (

    <BrowserRouter>

      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Home />} />
          <Route path="/delivery" element={<Home />} />
          <Route path="/basket" element={<Home />} />
          <Route path="/profile/:id" element={<Home />}/>

        </Route>


      </Routes>
    </BrowserRouter>

  );
}

export default App;
