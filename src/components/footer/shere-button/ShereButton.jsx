import React from "react";
import "./shere-button.scss";
import { ReactComponent as ShereSvg } from "../../../assets/images/icon-share@3x.svg";

const ShereButton = ({ title }) => {
  const shereHandler = () => {
    alert("Tack för att du delar! \nThank you for shering! ");
  };

  return (
    <div className="shere" onClick={shereHandler}>
      <span className="shere__text">{title}</span>
      <ShereSvg />
    </div>
  );
};

export default ShereButton;
