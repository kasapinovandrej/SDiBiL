import React from "react";
import "./sub-page-hero.scss";
import Logo from "../logo/Logo";
import Title from "../title/Title";
import Subtitle from "../subtitle/Subtitle";

const SubPageHero = () => {
  return (
    <div className="subpage-hero">
      <Logo />
      <Title title="OM OSS" type="subpage" />
      <Subtitle title="SNABB & SMIDIG BETALNING MED BANKÖVERFÖRING" />
    </div>
  );
};

export default SubPageHero;
