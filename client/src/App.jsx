import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Signin from './Pages/Signin';
import Dashboard from './Pages/Dashboard';
import About from './Pages/About';
import Header from './Components/Header';
import Projects from './Pages/Projects';

export default function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About />} />
    <Route path='/dashboard' element={<Dashboard/>} />
    <Route path='/signin' element={<Signin/>} />
    <Route path='/signup' element={<SignUp/>} /> 
    <Route path='/projects' element={<Projects/>} /> 


   </Routes>
   </BrowserRouter>
  )
}
