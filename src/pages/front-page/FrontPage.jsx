import React from "react";
import "./front-page.scss";
import ImageSlider from "../../components/slider/ImageSlider";

const FrontPage = () => {
  return (
    <div className="wrap">
      <div className="hero">
        <div className="hero__swiper">
          <ImageSlider />
        </div>
        <div className="hero__form">form</div>
      </div>
    </div>
  );
};

export default FrontPage;
