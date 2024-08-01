import React from "react";
// import preLoader from "./PreLoader.module.css";
import { useState,useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function PreLoader() {
  let [loading, setLoading] = useState(false);
  // let [color, setColor] = useState("#ffffff");

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[])

  return (
    <div className="sweet-loading">
      <ClipLoader
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default PreLoader;