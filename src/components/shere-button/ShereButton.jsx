import React from "react";
import "./shere-button.scss";
import { ReactComponent as ShereSvg } from "../../assets/images/icon-share@3x.svg";

const ShereButton = ({ title }) => {
  return (
    <div className="col-md-2 shere">
      <span className="">{title}</span>
      <ShereSvg />
    </div>
  );
};

export default ShereButton;
