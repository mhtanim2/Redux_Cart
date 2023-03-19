import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './Component/Header';
import CardPage from './Page/CardPage/CardPage';
import HomePage from './Page/HomePage/HomePage';
import ProductPage from './Page/ProductPage/ProductPage';
import "./Style/app.scss";

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/card' element={<CardPage/>}/>
      </Routes>
      
    </Router>
  )
}

export default App