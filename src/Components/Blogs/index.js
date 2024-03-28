import React from "react";
import Slider from "react-slick";
import BlogPost from "./BlogSlideshow";
import "./Blog.css";

import slide10 from "../../Assets/images/events/taxdeductioneverybusinessshouldknow.jpg";
import slide11 from "../../Assets/images/events/bookkeepingvat.jpeg";
import slide12 from "../../Assets/images/events/payrollservice.jpeg";

const BlogSlideshow = () => {
  const blogs = [
    {
      title: "Payroll Services",
      content:
        "Businesses of all kinds- from individuals to small and large enterprises face payroll issues. Payroll is not easy to manage just because your workforce is small. Although keeping up with the constantly evolving payroll...",
      imageUrl: slide12,
    },
    {
      title: "Bookkeeping And VAT Returns",
      content:
        "Bookkeeping is the process of tracking and monitoring your company’s financial transactions. Staying compliant with regulations and maintaining tabs on your company’s financial situation needs accurate bookkeepin....",
      imageUrl: slide11,
    },
    {
      title: "Tax Deductions Every Business Should Know",
      content:
        "Taxes are a necessary part of running a business, but they don't have to be a financial burden. One of the most effective ways to reduce your business's tax liability is by taking advantage of valuable tax deductions. These deductions....",
      imageUrl: slide10,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="blog">
      <div className="head">
        <h1>Our Trending Blogs</h1>
      </div>
      <Slider {...settings}>
        {blogs.map((blog, index) => (
          <div key={index} className="blogcont">
            <BlogPost {...blog} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogSlideshow;
