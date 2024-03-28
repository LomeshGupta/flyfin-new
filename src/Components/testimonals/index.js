import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "./Testi";
import "./testimonial.css";

const TestimonialSection = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const testimonials = [
    {
      name: "John Doe",
      position: "CEO, Company A",
      comment:
        "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
    },
    {
      name: "John Doe",
      position: "CEO, Company A",
      comment:
        "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
    },
    {
      name: "John Doe",
      position: "CEO, Company A",
      comment:
        "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
    },
    {
      name: "John Doe",
      position: "CEO, Company A",
      comment:
        "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
    },
    // Add more testimonials as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Set the autoplay speed in milliseconds (5 seconds)
  };

  return (
    <div className="testimonial-section">
      <div className="head">
        <h1>Client Testimonials</h1>
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="cont">
            <Testimonial {...testimonial} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSection;
