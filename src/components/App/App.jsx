import React from 'react'
import {
    BrowserRouter as Router, Routes, Route,
} from "react-router-dom";

import{
    MainPage, AboutPage, PostsDetails, Posts,
} from "../../pages";
import Navbar from '../Navbar/Navbar';
import { useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom';


const App = () => {
  return (
   <Router>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Protected><MainPage/></Protected>}/>
    </Routes>
    <Routes>
        <Route path='/about' element={<Protected><AboutPage/></Protected>}/>
    </Routes>
    <Routes>
        <Route path='/posts' element={<Protected><Posts/></Protected>}/>
    </Routes>
    <Routes>
        <Route path='/posts/:id' element={<Protected><PostsDetails/></Protected>}/>
    </Routes>
   
   </Router>
  )
}

const Protected = ({ children }) => {
    const [token] = useState(localStorage.getItem("token"));
    const navigate = useNavigate();

    useEffect (() => {
        if(!token) return navigate ("/")
    },[])

    return children;
}

export default App