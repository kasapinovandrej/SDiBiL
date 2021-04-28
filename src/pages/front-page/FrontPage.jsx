import React from "react";
import "./front-page.scss";
import ImageSlider from "../../components/slider/ImageSlider";
import Form from "../../components/form/Form";
import FrontPageOverlay from "../../components/front-page-overlay/FrontPageOverlay";

const FrontPage = () => {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero__swiper">
          <FrontPageOverlay />
          <ImageSlider />
        </div>
        <div className="hero__form">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
