import "./App.css";
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Component/Navbar/Navbar";
import TopInfo from "./Component/TopInfo/TopInfo";

function App() {
  return (
    <Fragment>
      <TopInfo/>
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
