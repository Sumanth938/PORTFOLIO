import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import "./Loader.css"

const Loader = () => {
  return (
    <div className="loader-layout">
      <InfinitySpin width="200" color="#eab308" />
    </div>
  );
};

export default Loader;
