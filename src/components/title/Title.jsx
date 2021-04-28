import React from "react";
import "./title.scss";

const title = ({ title, type }) => <h1 className={`title ${type}`}>{title}</h1>;

export default title;
