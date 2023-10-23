import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home'

import Product from './Pages/Product';


function App() {
  return (
    <div className="App">


 <Routes>
  <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>

  

  
 </Routes>
 
 
    
  
    </div>
  );
}

export default App;
