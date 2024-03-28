import React from "react";
import "./service.css";
import Serviceimg from "../../Assets/images/services-page/banner.jpg";

const Home = () => {
  return (
    <section class="ourservice">
      <div className="slide">
        <img src={Serviceimg} alt=".." />
        <div className="overlay">
          <p>
            Expert Financial and Business Consulting with 14 Years of Global
            Experience
          </p>
        </div>
        <div className="btn">
          <a className="servicebtn">EXPLORE OUR SERVICE</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
