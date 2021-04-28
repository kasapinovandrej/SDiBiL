import React from "react";
import ImageOne from "../../assets/images/ilu-001-m@2x.jpg";
import ImageTwo from "../../assets/images/ilu-002-m@2x.jpg";
import Carousel from "react-bootstrap/Carousel";
import "./image-slider.scss";

const ImageSlider = () => {
  return (
    <Carousel controls={false} interval={11000} pause={false} touch={true}>
      <Carousel.Item>
        <div className="slider-box">
          <img src={ImageOne} alt="First slide" className="slider-image" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slider-box">
          <img src={ImageTwo} alt="Second slide" className="slider-image" />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageSlider;
