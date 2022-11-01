import React from "react";
import loading from "./loading.gif";

const Loader = () => {
  return (
    <div>
      <div className="container text-center">
        <img src={loading} className="h1" alt="" />
      </div>
    </div>
  );
};

export default Loader;
