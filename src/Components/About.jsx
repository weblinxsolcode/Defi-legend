import React from "react";
import Banner from "./Elements/Banner";
import Faqs from "./Elements/Faqs";
import FaqsTwo from "./Elements/FaqsTwo";


const About = () => {
  return (
    <>
      <section className="">
        <Banner />
        <div className="text-center  my-5"  >
          <h1 className="headingfont2 lower-case ">
            Welcome To
            <span className="textstyle mx-1 headingfont2">
            <img src={process.env.PUBLIC_URL + "assets/headings/Defin.png"} className="meta img-fluid" alt="" />
            </span>
          </h1>
          <p className="text-yellow headingfont mt-4">
            The future of gaming that combines valued art, <br className="d-lg-block d-none" /> defi & a playtoearn
            model all in one!
          </p>
        </div>
        <div className=" position-r">
          <div className="container ">
            <img
              src={process.env.PUBLIC_URL + "assets/images/sidebg-about-1.png"}
              alt=""
              className=" img-fluid right-img"
            />
            <img
              src={process.env.PUBLIC_URL + "assets/images/sidebg-about-2.png"}
              alt=""
              className=" img-fluid left-img"
            />
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 col-md-6 text-lg-start text-center">
                <h1 className="ms-lg-4 ps-lg-3 text-light headingfont2">FAQs</h1>
                <div>
                  <Faqs />
                </div>
              </div>
              <div className="col-12 col-lg-6 col-md-6 positon-r">
                <div className="text-center">
                  <img
                    src={
                      process.env.PUBLIC_URL + "assets/images/cutemonster.png"
                    }
                    alt=""
                    className="floating w-50 z-uper"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-lg-5 mt-2 align-items-center ">
              <div className="col-12 col-lg-6  d-lg-block d-none col-md-6">
                <div className="text-center">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "assets/images/cutemonster(2).png"
                    }
                    alt=""
                    className="w-75 floating z-uper"
                  />
                </div>
              </div>
              <div className="col-12 mt-lg-0 mt-5 col-lg-6 col-md-6 text-lg-start text-center">
                <h1 className="ms-lg-4 text-light headingfont2">Support</h1>
                <div>
                  <FaqsTwo />
                </div>
              </div>
              <div className="col-12 col-lg-6 d-lg-none d-block col-md-6">
                <div className="text-center">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "assets/images/cutemonster(2).png"
                    }
                    alt=""
                    className="w-75 floating z-uper"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default About;
