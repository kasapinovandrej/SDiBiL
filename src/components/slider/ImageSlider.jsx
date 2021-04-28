import React from "react";
import ImageOne from "../../assets/images/ilu-001-m@2x.jpg";
import ImageTwo from "../../assets/images/ilu-002-m@2x.jpg";
import Carousel from "react-bootstrap/Carousel";
import "./image-slider.scss";

const ImageSlider = () => {
  return (
    <Carousel
      controls={false}
      interval={11000}
      pause={false}
      touch={true}
      // indicators={false}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ImageOne}
          alt="First slide"
          className="slider-image"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ImageTwo}
          alt="Second slide"
          className="slider-image"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageSlider;
