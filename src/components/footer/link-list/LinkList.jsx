import React from "react";
import "./link-list.scss";

const LinkList = () => {
  return (
    <div className="col-md-8 offset-md-2 list align-items-center jusctift-content-center">
      <ul className="row list">
        <li className="link col-md-3 ">Sdi Bil Stockholm</li>
        <li className="link col-md-2">Hemsida</li>
        <li className="link col-md-2">Om oss</li>
        <li className="link col-md-2">info@sdibil.se</li>
        <li className="link col-md-3">073-70 58 642</li>
      </ul>
    </div>
  );
};

export default LinkList;
