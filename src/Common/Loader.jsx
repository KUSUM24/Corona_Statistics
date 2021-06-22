import React from "react";
import "./styles/loader.css";

export const Loader = () => {
  return (
    <div className="text-center">
      <div class="lds-roller ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
