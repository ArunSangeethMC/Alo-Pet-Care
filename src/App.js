import React,{Suspense}from 'react';
import PreLoader from "./Component/PreLoader/PreLoader.jsx";
import {Routes,Route} from "react-router-dom"
import Navbar from "./Component/Navbar/Navbar"
import './Component/Global.css'
import './App.css'

import Services from "./Component/Services/Services";
import About from "./Component/About/About";
import Blog from "./Component/Blog/Blog";
import Contact from "./Component/Contact/Contact";
const Home = React.lazy(()=> import('./Component/Home/Header/Header.js'));

function App() {
  
  return (
    <> 
       <Suspense fallback={<PreLoader/>}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </Suspense>
    </>
  );
}

export default App;
