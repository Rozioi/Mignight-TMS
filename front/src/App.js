import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/HomePage/Home";
import Layout from "./Components/Layer/Layout";
import FormAddShoes from "./Components/FormAddShoes/FormAddShoes"
import NotFound from "./Components/NotFound/NotFound";
import Catalog from "./Components/Catalog/Catalog";


const App = () => {
  return (

    <BrowserRouter>

      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/delivery" element={<Home />} />
          <Route path="/basket" element={<Home />} />
          <Route path="/profile/:id" element={<Home />}/>

        </Route>
        <Route path="/admin/add" element={<FormAddShoes />}/>
        <Route path="*" element={<NotFound />} />


      </Routes>
    </BrowserRouter>

  );
}

export default App;
