// SlideshowBanner.js

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './SlideshowBanner.css';
import Home1 from "../../Assets/images/banner/bann1.jpg";
import Home2 from "../../Assets/images/banner/bann2.jpg";
import Home3 from "../../Assets/images/banner/bann3.jpg";

const SlideshowBanner = () => {
  const slides = [
    {
      imageUrl: Home1,
      title: "Endeavour to<br />Create Value Addition",
      subtitle:
        "Endeavouring to Create Value: Driving Innovation for <br/> Greater Impact, Embracing Change for Lasting Progress.",
      buttonText: "Explore Now",
    },
    {
      imageUrl: Home2,
      title: "Coorporate Services <br /> on a Global Arena",
      subtitle:
        "Corporate Services, Global Arena: Unlock Boundless Opportunities, <br/>Expertly Guiding You Through International Business Challenges.",
      buttonText: "Get Started",
    },
    {
      imageUrl: Home3,
      title: "Our Services",
      subtitle:
        "Tailored Solutions, Meeting Your Unique <br/>Needs, Providing Customized Solutions for Every Requirement.",
      buttonText: "Explore Now",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="slideshow-banner">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.imageUrl} alt={`Slide ${index + 1}`} />
            <div className="overlay1">
              <p dangerouslySetInnerHTML={{ __html: slide.title }}></p>
            </div>
            <div className="overlay2">
              <p dangerouslySetInnerHTML={{ __html: slide.subtitle }}></p>
            </div>
            <div className="btn">
              <a className="servicebtn">{slide.buttonText}</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideshowBanner;
