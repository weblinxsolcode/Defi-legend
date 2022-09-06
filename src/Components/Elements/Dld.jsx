import React from 'react'
import Slider from "react-slick";
const Dld = () => {
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
          arrows: true,

          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const Srightarrow5 = () => {

    document.querySelector(".slider7 .slick-slider .slick-next").click();
  }
  const Sleftarrow5 = () => {

    document.querySelector(".slider7 .slick-slider .slick-next").click();
  }
  return (
    <>
      <div id="DLD" >
        <div className='slider7 position-r'>
          <img src={process.env.PUBLIC_URL + "assets/images/left-arrow-s.png"} className="left-arrow" onClick={() => Srightarrow5()} alt="" />



          <Slider {...settings5}>
            <div className="text-center    car-slide car-slide-2 ">
              <img
                src={process.env.PUBLIC_URL + "assets/DLD/01.png"}
                alt=""
                className=" "
              />
            </div>
            <div className="text-center  car-slide car-slide-2">
              <img
                src={process.env.PUBLIC_URL + "assets/DLD/02.png"}
                alt=""
                className=" "
              />
            </div>
            <div className="text-center car-slide car-slide-2">
              <img
                src={process.env.PUBLIC_URL + "assets/DLD/03.png"}
                alt=""
                className=" "
              />
            </div>
            <div className="text-center  car-slide car-slide-2">
              <img
                src={process.env.PUBLIC_URL + "assets/DLD/04.png"}
                alt=""
                className=""
              />
            </div>
            <div className="text-center car-slide car-slide-2">
              <img
                src={process.env.PUBLIC_URL + "assets/DLD/05.png"}
                alt=""
                className=" "
              />
            </div>
            <div className="text-center  car-slide car-slide-2">
              <img
                src={process.env.PUBLIC_URL + "assets/DLD/06.png"}
                alt=""
                className=" "
              />
            </div>
          </Slider>
          <img src={process.env.PUBLIC_URL + "assets/images/right-arrow-s.png"} className="right-arrow" onClick={() => Sleftarrow5()} alt="" />
        </div>
      </div>
    </>
  )
}

export default Dld