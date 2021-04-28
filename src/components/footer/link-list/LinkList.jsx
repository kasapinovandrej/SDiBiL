import React from "react";
import "./link-list.scss";
import { Link } from "react-router-dom";

const LinkList = () => {
  return (
    <ul className="list-box">
      <li className="list">Sdi Bil Stockholm</li>
      <li className="list">
        <Link className="link" to="/">
          Hemsida
        </Link>
      </li>
      <li className="list">
        <Link className="link" to="/om-oss">
          Om oss
        </Link>
      </li>
      <li className="list">
        <a className="link" href="mailto: info@sdibil.se">
          info@sdibil.se
        </a>
      </li>
      <li className="list">
        <a className="link" href="tel:0737058642">
          073-70 58 642
        </a>
      </li>
    </ul>
  );
};

export default LinkList;
