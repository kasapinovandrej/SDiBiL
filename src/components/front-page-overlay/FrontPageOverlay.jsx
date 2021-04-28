import Logo from "../logo/Logo";
import React from "react";
import "./front-page-overlay.scss";

const FrontPageOverlay = () => {
  return (
    <div className="overlay">
      <Logo />
      <h1 className="title">VI KÖPER DIN BIL</h1>
      <h2 className="text">SNABB & SMIDIG BETALNING MED BANKÖVERFÖRING</h2>
      <p className="paragraph">
        Det blev allmänt känt på 1960-talet i samband med lanseringen av
        Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som
        Aldus PageMaker. Det blev allmänt känt på 1960-talet i samband med
        lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med
        mjukvar
      </p>
    </div>
  );
};

export default FrontPageOverlay;
