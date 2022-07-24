import { useState } from 'react';
import './App.css';
import Menu from './components/menu/menu';
import { Routes, Route } from "react-router-dom"; 
import Main from './components/all_window/main';
import Add from './components/add_window/add';
import Delete from './components/delete_window/delete';


function App() {


  return (
    <div className="App">
      <Menu />

      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/add' element={<Add />}/>
        <Route path='/Delete' element={<Delete />}/>
        <Route path='*' element={<div>Page not found</div>} />
      </Routes>




    </div>
  );
}

export default App;
