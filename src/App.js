import "./App.css";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
// import TopInfo from "./Component/TopInfo/TopInfo";
// import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Service from "./Component/Service/Service";
import Contact from "./Component/Contact/Contact";
import { Testimonial } from "./Component/Testmonial/Testimonial";
// import { Combinedcomponent } from "./Component/Combinedcomponent";

function App() {
  return (
    <Fragment>
      {/* <TopInfo /> */}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/testmonial" element={<Testimonial/>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Combinedcomponent/> */}
    </Fragment>
  );
}

export default App;
