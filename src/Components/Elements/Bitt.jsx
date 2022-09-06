import React from 'react'
import Slider from "react-slick";

const Bitt = () => {
  const settings5 = {
    centerMode: true,
    centerPadding: "0px",
    dots: false,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const Srightarrow6 = () => {

    document.querySelector(".slider7 .slick-slider .slick-next").click();
  }
  const Sleftarrow6 = () => {

    document.querySelector(".slider7 .slick-slider .slick-next").click();
  }
  return (
    <>
      <div id="Bitt"  >
        <div className='slider7 position-r'>
          <img src={process.env.PUBLIC_URL + "assets/images/left-arrow-s.png"} className="left-arrow" onClick={() => Srightarrow6()} alt="" />
          <img src={process.env.PUBLIC_URL + "assets/images/right-arrow-s.png"} className="right-arrow" onClick={() => Sleftarrow6()} alt="" />
          <Slider {...settings5}>
            <div className="text-center   car-slide car-slide-2 ">
              <img
                src={process.env.PUBLIC_URL + "assets/bitt/01.png"}
                alt=""
                className=" "
              />
            </div>
            <div className="text-center  car-slide car-slide-2">
              <img
                src={process.env.PUBLIC_URL + "assets/bitt/02.png"}
                alt=""
                className=" "
              />
            </div>
            <div className="text-center car-slide car-slide-2">
              <img
                src={process.env.PUBLIC_URL + "assets/bitt/03.png"}
                alt=""
                className=" "
              />
            </div>
            <div className="text-center  car-slide car-slide-2">
              <img
                src={process.env.PUBLIC_URL + "assets/bitt/04.png"}
                alt=""
                className=""
              />
            </div>

          </Slider>
        </div>
      </div>
    </>
  )
}

export default Bitt