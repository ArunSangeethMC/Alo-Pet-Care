import React from "react";
// import preLoader from "./PreLoader.module.css";
// import { useState,useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "flex",
  margin: "300px auto 0 auto",
  borderColor: "red",
};

function PreLoader() {
  // let [loading, setLoading] = useState(false);
  // let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      <ClipLoader
        // loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default PreLoader;