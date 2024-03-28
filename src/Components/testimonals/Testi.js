// Testimonial.js

import React from "react";
import Svg from "../../Assets/quotes.png";

const Testimonial = ({ name, position, comment }) => {
  return (
    <div className="testimonial">
      <div className="img">
        <img src={Svg} width="20%" alt="..." />
      </div>
      <p className="comment">{comment}</p>
      <div className="info">
        <p className="name">{name}</p>
        <p className="position">{position}</p>
      </div>
    </div>
  );
};

export default Testimonial;
