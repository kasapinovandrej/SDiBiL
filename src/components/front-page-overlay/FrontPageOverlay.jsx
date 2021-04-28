import Logo from "../logo/Logo";
import React from "react";
import "./front-page-overlay.scss";
import Subtitle from "../subtitle/Subtitle";
import Title from "../title/Title";

const FrontPageOverlay = () => {
  return (
    <div className="overlay">
      <Logo />
      <Title title="VI KÖPER DIN BIL" type="frontpage" />
      <Subtitle title="SNABB & SMIDIG BETALNING MED BANKÖVERFÖRING" />
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
