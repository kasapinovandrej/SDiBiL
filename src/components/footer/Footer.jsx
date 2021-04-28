import React from "react";
import ShereButton from "./shere-button/ShereButton";
import LinkList from "./link-list/LinkList";
import Rights from "./rights/Rights";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer container-xl cont">
      <div className="link-box">
        <LinkList />
        <ShereButton title="shere" />
      </div>
      <Rights />
    </footer>
  );
};

export default Footer;
