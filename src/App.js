import React, { Suspense } from 'react';
// import PreLoader from "./Component/PreLoader/PreLoader.jsx";
import {Routes,Route} from "react-router-dom"
import Navbar from "./Component/Navbar/Navbar"
import './Component/Global.css'

// const Home = React.lazy(()=> import('./Component/Home/Header.js'))
// import Services from "./Component/Services/Services"
// import About from "./Component/About/About"
// import Blog from "./Component/Blog/Blog"
// import Contact from "./Component/Contact/Contact"

function App() {
  
  return (
    <>  
      <Navbar/>
      <Suspense>
        <Routes>
          {/* <Route to="/" element={<Home/>}/> */}
          {/* <Route to="/about" element={<About/>}/> */}
          {/* <Route to="/services" element={<Services/>}/> */}
          {/* <Route to="/blog" element={<Blog/>}/> */}
          {/* <Route to="/contact" element={<Contact/>}/> */}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
