import React from "react";
import SubPageHero from "../../components/subpage-hero/SubPageHero";
import SubPageText from "../../components/subpage-text-section/SubPageText";

const SubPage = () => {
  return (
    <div className="container-xl cont">
      <SubPageHero />
      <SubPageText />
    </div>
  );
};

export default SubPage;
