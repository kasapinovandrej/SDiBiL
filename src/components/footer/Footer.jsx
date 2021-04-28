import React from "react";
import ShereButton from "../shere-button/ShereButton";
import LinkList from "./link-list/LinkList";
import Rights from "./rights/Rights";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <LinkList />
      <ShereButton title="shere" />
      <Rights />
    </footer>
  );
};

export default Footer;
