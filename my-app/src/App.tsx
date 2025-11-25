import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from "./component/Home";
import Instruction from './component/Instruction';



const App = () => {
  return ( 
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/instruction' element={<Instruction />}/>
      </Routes>
    </>
   );
}
 
export default App;










