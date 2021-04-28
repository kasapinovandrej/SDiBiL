import React from "react";
import "./subtitle.scss";

const Subtitle = ({ title, type }) => (
  <h2 className={`subtitle ${type}`}>{title}</h2>
);

export default Subtitle;
