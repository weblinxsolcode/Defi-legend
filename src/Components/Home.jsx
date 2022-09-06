import React, { useState, useEffect } from "react";
import { BsShop } from "react-icons/bs";
import { FiLayers } from "react-icons/fi";
import { BsFillPlayFill } from "react-icons/bs";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";
import Bitt from "./Elements/Bitt";
import Dld from "./Elements/Dld";




export default function Home() {

  const [button, setbutton] = useState(0)
  const [center, setcenter] = useState(20);
  const [slider, setslider] = useState(0);


  useEffect(() => {
    console.log(slider);
  }, [slider])



  const leftarrow = () => {
    if (center > buttonArray.length - 2) {
      setcenter(2)
    }
    else {
      setcenter(center + 1)
    }
    document.querySelector(".slider-car .slick-slider .slick-prev").click();
  }
  const rightarrow = () => {
    if (center != 0) {
      setcenter(center - 1)
    }
    document.querySelector(".slider-car .slick-slider .slick-next").click();
  }
  const Srightarrow1 = () => {

    document.querySelector(".slider .slick-slider .slick-next").click();
  }
  const Srightarrow2 = () => {

    document.querySelector(".slider .slick-slider .slick-next").click();
  }
  const Srightarrow3 = () => {

    document.querySelector(".slider3 .slick-slider .slick-next").click();
  }
  const Srightarrow4 = () => {

    document.querySelector(".slider3 .slick-slider .slick-next").click();
  }

  const buttonArray = [
    "Strategy",
    "Tower defence",
    "MOBA",
    " Hack and Slash",
    "Racing",
    "Strategy",
    "Tower defence",
    "MOBA",
    " Hack and Slash",
    "Racing",
    "Strategy",
    "Tower defence",
    "MOBA",
    " Hack and Slash",
    "Racing",
    "Strategy",
    "Tower defence",
    "MOBA",
    " Hack and Slash",
    "Racing",
    "Strategy",
    "Tower defence",
    "MOBA",
    " Hack and Slash",
    "Racing",
    "Strategy",
    "Tower defence",
    "MOBA",
    " Hack and Slash",
    "Racing",
    "Strategy",
    "Tower defence",
    "MOBA",
    " Hack and Slash",
    "Racing",
    "Strategy",
    "Tower defence",
    "MOBA",
    " Hack and Slash",
    "Racing",
    "Strategy",
    "Tower defence",
    "MOBA",
    " Hack and Slash",
    "Racing",
    "Strategy",
    "Tower defence",
    "MOBA",
    " Hack and Slash",
    "Racing",
    "Strategy",
    "Tower defence",
    "MOBA",
    " Hack and Slash",
    "Racing",
    "Strategy",
    "Tower defence",
    "MOBA",
    " Hack and Slash",
    "Racing",
    "Strategy",
    "Tower defence",
    "MOBA",
    " Hack and Slash",
    "Racing",
    "Strategy",
    "Tower defence",
    "MOBA",
    " Hack and Slash",
    "Racing",
    "Strategy",
    "Tower defence",
    "MOBA",
    " Hack and Slash",
    "Racing",
    "Strategy",
    "Tower defence",
    "MOBA",
    " Hack and Slash",
    "Racing",
    "Strategy",
    "Tower defence",
    "MOBA",
    " Hack and Slash",
    "Racing",
    "Strategy",
    "Tower defence",
    "MOBA",
    " Hack and Slash",
    "Racing",
    "Strategy",
    "Tower defence",
    "MOBA",
    " Hack and Slash",
    "Racing",
    "Strategy",
    "Tower defence",
    "MOBA",
    " Hack and Slash",
    "Racing",
    "Strategy",
    "Tower defence",
    "MOBA",
    " Hack and Slash",
    "Racing",
    "Strategy",
    "Tower defence",
    "MOBA",
    " Hack and Slash",
    "Racing",

  ];

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoPlay: true,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: false,
          infinite: true,


          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  const settings2 = {
    centerMode: true,
    centerPadding: "0px",
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings3 = {
    rows: 2,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          rows: 1,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          rows: 1,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
//   var ua = navigator.userAgent.toLowerCase(); 
//   if (ua.indexOf('safari') != -1) { 
//     if (ua.indexOf('chrome') > -1) {
//       alert("1") // Chrome
//     } else {
  
//       alert("ss")
    
//   }
// }
  return (
    <>
      <section className="banner-2 " id="top2">
      <img  id="bgvid" src="https://video.weblinxsolution.com/03.gif" alt="" />
      {/* <img  id="bgvid" src={process.env.PUBLIC_URL + "assets/images/03.gif"} alt="" /> */}
        {/* <video loop={true} autoPlay={true}  id="bgvid" muted={true} playsInline>
          <source src={process.env.PUBLIC_URL + "assets/images/01.gif"} type="video/mp4" />

          Your browser does not support the video tag.
        </video> */}
        <div className="mx-0 main-banner floating ">
          <div className="">
            <img className="banner-img" src={process.env.PUBLIC_URL + "assets/images/banner-mini.png"} alt="" />
          </div>
          <button className="cust_btn mt-3 shake d-flex justify-content-between  align-items-center">
            <span className="btn-play">
              <BsFillPlayFill />
            </span>
            <p className="mb-0 mx-3">Watch Trailer</p>
          </button>
        </div>

      </section>
      <div className="blur-div" >

      </div>
      <section className="container mt-5  mt-lg-5 pt-5 ">
        <div className="slider position-r">
          <div className="angleLeft" onClick={() => Srightarrow1()}>
            <FaAngleLeft />
          </div>
          <div className="angleRight" onClick={() => Srightarrow2()}>
            <FaAngleRight />
          </div>
          <Slider {...settings}>
            <div className="text-center">
      <img  className="slider-img" src={process.env.PUBLIC_URL + "assets/slider/g-01.gif"} alt="" />
            
             
            </div>
            <div className="text-center">
            <img  className="slider-img" src={process.env.PUBLIC_URL + "assets/slider/g-02.gif"} alt="" />

            </div>
            <div className="text-center">
            <img  className="slider-img" src={process.env.PUBLIC_URL + "assets/slider/g-03.gif"} alt="" />

            </div>
            <div className="text-center">
            <img  className="slider-img" src={process.env.PUBLIC_URL + "assets/slider/g-04.gif"} alt="" />

            </div>
            <div className="text-center">
            <img  className="slider-img" src={process.env.PUBLIC_URL + "assets/slider/g-05.gif"} alt="" />

            </div>
            <div className="text-center">
            <img  className="slider-img" src={process.env.PUBLIC_URL + "assets/slider/g-06.gif"} alt="" />

            </div>
            <div className="text-center">
            <img  className="slider-img" src={process.env.PUBLIC_URL + "assets/slider/g-07.gif"} alt="" />

            </div>
            <div className="text-center">
            <img  className="slider-img" src={process.env.PUBLIC_URL + "assets/slider/g-08.gif"} alt="" />

            </div>
            <div className="text-center">
            <img  className="slider-img" src={process.env.PUBLIC_URL + "assets/slider/g-09.gif"} alt="" />

            </div>
            <div className="text-center">
            <img  className="slider-img" src={process.env.PUBLIC_URL + "assets/slider/g-10.gif"} alt="" />

            </div>
            <div className="text-center">
            <img  className="slider-img" src={process.env.PUBLIC_URL + "assets/slider/g-11.gif"} alt="" />

            </div>
            <div className="text-center">
            <img  className="slider-img" src={process.env.PUBLIC_URL + "assets/slider/g-12.gif"} alt="" />

            </div>
            <div className="text-center">
            <img  className="slider-img" src={process.env.PUBLIC_URL + "assets/slider/g-13.gif"} alt="" />

            </div>
            <div className="text-center">
            <img  className="slider-img" src={process.env.PUBLIC_URL + "assets/slider/g-14.gif"} alt="" />

            </div>
            <div className="text-center">
            <img  className="slider-img" src={process.env.PUBLIC_URL + "assets/slider/g-15.gif"} alt="" />

            </div>
            <div className="text-center">
            <img  className="slider-img" src={process.env.PUBLIC_URL + "assets/slider/g-15.gif"} alt="" />

            </div>
            <div className="text-center">
            <img  className="slider-img" src={process.env.PUBLIC_URL + "assets/slider/g-16.gif"} alt="" />

            </div>
            <div className="text-center">
            <img  className="slider-img" src={process.env.PUBLIC_URL + "assets/slider/g-17.gif"} alt="" />

            </div>
            <div className="text-center">
            <img  className="slider-img" src={process.env.PUBLIC_URL + "assets/slider/g-18.gif"} alt="" />

            </div>
            <div className="text-center">
            <img  className="slider-img" src={process.env.PUBLIC_URL + "assets/slider/g-19.gif"} alt="" />

            </div>





          </Slider>
        </div>
      </section>
      <section className="coregame">
        <div className="container">
          <div className="text-center mt-3 mt-lg-5">
            {/* <img src="assets/backhead/CoreGameplay." alt="" /> */}
            <div className=" position-r">
              <h1 className="headingfont2">Core Gameplay</h1>
              <div className="w-100 d-flex justify-content-center">
                {/* <h2 className="text-yellow headingfont text-style neon">
                  Play to Earn
                </h2> */}
              </div>
              <img className="img-fluid play" src={process.env.PUBLIC_URL + "assets/headings/PlaytoEarn.png"} alt="" />
              <p className=" mx-auto fs-8 text-faded">
                Definity Legend is a Turn-Based Strategy RPG with an exciting
                end goal of <br className="d-none d-lg-block" /> creating a multi layer gaming platform. Join our
                Campaign, Guild wars, Arena <br className="d-none d-lg-block" /> Fights, Land ownership, game and NFT
                creation and so much more!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sideBar ">
        <div className=" container">
          <div className="row ">
            <div className="col-2  d-flex">
              {/* <img
                src={process.env.PUBLIC_URL + "assets/images/right-arrow.png"}
                alt=""
                className=" right-img mt-5"
              /> */}
            </div>
            <div className="col-lg-10 col-12  " >
              <img
                src={process.env.PUBLIC_URL + "assets/images/side.png"}
                alt=""
                className="img-fluid"
                data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000"
              />
            </div>
          </div>
          {/* data-aos="fade-right
           data-aos="fade-left" */}
          <div className="row mar-cus ">
            <div className="col-lg-10 col-12 " >
              <img
                src={process.env.PUBLIC_URL + "assets/images/side2.png"}
                alt=""
                className="img-fluid"
                data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000"
              />
            </div>
            <div className="col-2 d-flex" >
              {/* <img
                src={process.env.PUBLIC_URL + "assets/images/right-arrow.png"}
                alt=""
                className=" right-img mt-5"
              /> */}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 mt-2 text-lg-start text-center">
              <img
                src={process.env.PUBLIC_URL + "assets/images/Monster-1.png"}
                alt=""
                className="floating  w-75"
              />
            </div>
            <div className="col-12 col-lg-6 mt-2 text-lg-start text-center">
              <h1 className="headingfont2">
                DEFINITY <br /> METAVERSE
              </h1>
              <p className="ch border-yellow my-3 w-100 ">
                Definity Legend Metaverse has a robust and uniquely beautiful
                brand identity. Our characters, background, assets and avatars
                are all drawn following Definity Studios exclusive in house
                design.<br className="d-none d-lg-block" /> It is a very apparent recipe for success, as with mobile
                legends or league of legends. We are very proud to be compared
                to their level of art quality and we hope you enjoy the gamefi
                playtoearn trailer.
              </p>
              <div className="d-flex justify-content-lg-start justify-content-center mx-auto">
                <button className="ms-lg-2 cust_btn d-flex justify-content-between align-items-center">
                  {/* <AiFillPlayCircle className="fs-1 text-primary" /> */}
                  <span className="btn-play">
                    <BsFillPlayFill />
                  </span>
                  <p className="mb-0 mx-3 fs-8 ">WATCH DLD RPG Game Trailer</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* road map section start */}
      <section className="upgrade">
        <div className="container">
          <div className="text-center mt-5  mt-lg-5 pt-lg-5">
            {/* <img
              src={process.env.PUBLIC_URL + "assets/images/Upgrade.png"}
              alt=""
              className="img-fluid in z-uper  "
            /> */}
            <div className=" position-r">
              <h1 className="headingfont2 ">
                upgrade & <br /> see your
                <span >
                  {/* nft */}
                  <img src={process.env.PUBLIC_URL + "assets/headings/Nft.png"} className="nft" alt="" />
                </span>
                grow !
              </h1>
              <p className="fs-8 text-faded">
                DefinityLegend is the first NFT Play To Earn game that allows
                players to own & <br /> modify the appearance of the NFT
                Characters & equipment that will reflect live in-game!
              </p>
            </div>
          </div>
          <div className="background-black">
            <div className="row  mt-lg-0 mt-5 align-items-center">
              <div className="col-lg-6 col-12 text-center">
                <img
                  src={process.env.PUBLIC_URL + "assets/images/R-1.png"}
                  alt=""
                  className="roadmap-1"
                />
              </div>
              <div className="col-lg-6 col-12 text-center">
                <div className="text-center">
                  <img
                  src={process.env.PUBLIC_URL + "assets/Slider/g-video-1.gif"}
                  alt=""
                  id="video-1"
                />
                  {/* <video id="video-1" playbackRate={0.5} loop={true} autoPlay={true} muted={true} playsInline>
                    <source src={process.env.PUBLIC_URL + "assets/Slider/video-1.mp4"} type="video/mp4" />

                    Your browser does not support the video tag.
                  </video> */}
                </div>
              </div>
            </div>
            <div className="row mar-cus-r mt-lg-0 mt-5 align-items-center">
              <div className="d-lg-none d-block col-lg-6 col-12 text-center">
                <img
                  src={process.env.PUBLIC_URL + "assets/images/R-2.png"}
                  alt=""
                  className="roadmap-1"
                />
              </div>
              <div className="col-lg-6 col-12 ">
                <div className="text-center">
                <img
                  src={process.env.PUBLIC_URL + "assets/Slider/g-video-2.gif"}
                  alt=""
                  id="video-1"
                />
                  {/* <video id="video-1" loop={true} autoPlay={true} muted={true} playsInline>
                    <source src={process.env.PUBLIC_URL + "assets/Slider/video-2.mp4"} type="video/mp4" />

                    Your browser does not support the video tag.
                  </video> */}
                </div>
              </div>
              <div className="col-lg-6 d-lg-block d-none col-12 text-center">
                <img
                  src={process.env.PUBLIC_URL + "assets/images/R-2.png"}
                  alt=""
                  className="roadmap-1"
                />
              </div>
            </div>
            <div className="row mar-cus-r mt-lg-0 mt-5 align-items-center">
              <div className="col-lg-6 col-12 text-center">
                <img
                  src={process.env.PUBLIC_URL + "assets/images/R-3.png"}
                  alt=""
                  className="roadmap-1"
                />
              </div>
              <div className="col-lg-6 col-12">
                <div className="text-center">
                <img
                  src={process.env.PUBLIC_URL + "assets/Slider/g-video-3.gif"}
                  alt=""
                  id="video-1"
                />
                  {/* <video id="video-1" loop={true} autoPlay={true} muted={true} playsInline>
                    <source src={process.env.PUBLIC_URL + "assets/Slider/video-3.mp4"} type="video/mp4" />

                    Your browser does not support the video tag.
                  </video> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* roadmap section end */}
      <section className="end-bg mt-lg-5 pt-lg-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 mt-2 text-lg-start text-center">
              <h1 className="headingfont2  ">DefinityLegend</h1>
              <div className="w-100 d-flex justify-content-start">
                {/* <h2 className="text-yellow headingfont2 text-style neon">
                  METAVERSE
                </h2> */}
                <img src={process.env.PUBLIC_URL + "assets/headings/meta.png"} className="meta img-fluid" alt="" />

              </div>
              {/* <h1 className=" headingfont2 neon text-yellow text-style text-style">
                METAVERSE
              </h1> */}
              <p className=" border-yellow ">
                Definity Legend is a combination of a Turn-Based Strategy RPG
                with a multi layer sandbox mode, providing users and game
                creators the possibility of easily creating virtually any game
                imaginable.
              </p>
            </div>
            <div className="col-lg-6 col-12 text-center mt-2 position-r ">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "assets/images/GameC.png"}
                  alt=""
                  className="w-75 mini-w-border "
                />
              </div>
              {/* <h3 className=" mt-2 headingfont text-yellow fs-6 ">Game Assets</h3> */}

              <div className="mt-lg-5">
                <img
                  src={process.env.PUBLIC_URL + "assets/images/GameD.png"}
                  alt=""
                  className="w-75 mt-lg-5"
                />
              </div>
              {/* <h4 className=" mt-2 fs-6 headingfont text-yellow ">
                Game World <br /> Editor Platform
              </h4> */}
            </div>
          </div>
        </div>
      </section>
      <section className="multi">
        <div className="container mt-lg-1 pt-lg-1 ">
          <div className="text-center  mx-4">
            <div className="w-100 d-flex justify-content-center">
              {/* <h1 className="text-yellow headingfont text-style neon">
                Multi Layered
              </h1> */}
              <img src={process.env.PUBLIC_URL + "assets/headings/multi.png"} className="multiL img-fluid" alt="" />

            </div>
            {/* <h1 className="headingfont text-style text-yellow">
              Multi Layered
            </h1> */}
            <h1 className="headingfont"> Gaming Platform </h1>
          </div>
          <div className="row align-items-center ">
            <div className="col-12 col-lg-6 col-md-6 mt-3">
              <div className="text-center ">
                <img
                  src={process.env.PUBLIC_URL + "assets/images/Ert.png"}
                  alt=""
                  className="w-75 floating "
                />
                <p className="mt-2 faded-color w-100 fs-8">
                  Other Metaverse is created in a
                  single world,<br className="d-lg-block d-none" /> making it
                  difficult  to scale
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-6 mt-3">
              <div className="text-center mx-lg-4 mx-0">
                <img
                  src={process.env.PUBLIC_URL + "assets/images/GameWp-3.png"}
                  alt=""
                  className="w-100 floating"
                />
                <p className="mt-5 faded-color w-100 fs-8 faded-color " >
                  DefinityLegend Sandbox acts like a
                  blockchain  scalable
                  amount <br className="d-lg-block d-none" /> of games  can be
                  created and  combined  into
                  one Eco-system
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-lg-5 mt-5 pt-lg-5 overflow-xhiden">
          <div className="text-center mx-lg-4">
            <h1 className="headingfont2 uper"> DefinityLegend</h1>
            <div className="w-100 d-flex justify-content-center">
              {/* <h1 className="text-yellow headingfont2 lower-case text-style neon">
              Sandbox
              </h1> */}
              <img src={process.env.PUBLIC_URL + "assets/headings/sand.png"} className="SAND img-fluid" alt="" />

            </div>

            <h4 className="fw-bolder mt-3 headingfont text-yellow">
              Thousands
              <br className="d-lg-block d-none" />
              of Games Variation
            </h4>
            <p className="fs-8 faded-color  w-100 mx-auto">
              With the game editor, game creators can create MOBA, RPG, Racing, Turn <br className="d-none d-lg-block" /> Based, and many more games with NO coding required. We are no longer <br className="d-none d-lg-block" /> limited to specific gameplay. Play and create anything with <br className="d-none d-lg-block" /> DefinityLegend
            </p>
          </div>
          <div className="bg">
            <div className="slider-car position-r">
              <div className="position-r">
                <img src="assets/images/left-arrow-s.png" className="left-arrow" onClick={() => leftarrow()} alt="" />

                <Slider {...settings2}>
                  <div className="text-center   car-slide">
                    <img
                      src={process.env.PUBLIC_URL + "assets/GameVariation/01.png"}
                      alt=""
                      className=" "
                    />
                  </div>
                  <div className="text-center  car-slide">
                    <img
                      src={process.env.PUBLIC_URL + "assets/GameVariation/02.png"}
                      alt=""
                      className=" "
                    />
                  </div>
                  <div className="text-center car-slide">
                    <img
                      src={process.env.PUBLIC_URL + "assets/GameVariation/03.png"}
                      alt=""
                      className=" "
                    />
                  </div>
                  <div className="text-center  car-slide">
                    <img
                      src={process.env.PUBLIC_URL + "assets/GameVariation/04.png"}
                      alt=""
                      className=""
                    />
                  </div>
                  <div className="text-center car-slide">
                    <img
                      src={process.env.PUBLIC_URL + "assets/GameVariation/05.png"}
                      alt=""
                      className=" "
                    />
                  </div>

                </Slider>

                <img src="assets/images/right-arrow-s.png" onClick={() => rightarrow()} className="right-arrow" alt="" />
              </div>

            </div>

          </div>
        </div>
      </section>
      <section className="cus-slider container ">
        <div className="">
          <div className="ws-vertical-slide d-flex flex-column align-items-center w-100 py-lg-5 my-lg-5 position-r">
            {buttonArray.map((item, index) => (
              <div className="ws-slide-items" style={{
                transform: (center - 2 == index ? 'scale(.5)' : center - 1 == index ? 'scale(.7)' : index == center ? 'scale(1)' : index + 1 == (center + 2) ? 'scale(.7)' : index + 2 == (center + 4) ? 'scale(.5)' : 'scale(0)'),
                display: (center - 2 == index ? 'block' : center - 1 == index ? 'block' : index == center ? 'block' : index + 1 == (center + 2) ? 'block' : index + 2 == (center + 4) ? 'block' : 'none'),
                opacity: (index == center ? '1' : '0.4'),
                filter: (index == center ? 'grayscale(0)' : 'grayscale(1)'),
              }}>
                <div className="position-r shine d-flex align-items-center justify-content-center">


                  <img src="assets/images/frm.png" alt="" />

                  <p className="slider-text">
                    {item}
                  </p>
                </div>
              </div>

            ))}
            <img src="assets/images/shine.png" className="shine-img" alt="" />
          </div>
        </div>
      </section>
      <section className="advert" >
        <div className="container mt-5">
          <div className="row align-items-center">
            <div className=" text-center">
              <h1 className="headingfont2 upper-case  ">Advert hub</h1>
            </div>

            <div className="col-lg-6 col-12 col-md-6 d-lg-block d-none text-lg-start text-center mt-5">
              <img
                src={process.env.PUBLIC_URL + "assets/images/G-1.png"}
                alt=""
                data-aos="fade-up-right"
                data-aos-duration="1000"
                className="w-75  mx-auto "
              />
            </div>
            <div className="col-lg-6 col-12 col-md-6 text-lg-start text-center mt-5" data-aos-duration="1000" data-aos="fade-up-left">
              <h3 className=" headingfont text-yellow  ">BILLBOARD ADVERT</h3>
              <p className="w-100 border-yellow">
                Advertising & Promotion brings sustainability into the <br className="d-none d-lg-block" /> GameFi
                eco-system. Bringing added value and  <br className="d-none d-lg-block" />targeted crypto audience
                for companies. Banners can <br className="d-none d-lg-block" /> be rented throughout each individual
                custom games <br className="d-none d-lg-block" /> through a fair and transparent bidding system.
              </p>
            </div>
            <div className="col-lg-6 col-12 d-lg-none d-block col-md-6 text-lg-start text-center mt-5">
              <img
                src={process.env.PUBLIC_URL + "assets/images/G-1.png"}
                alt=""
                data-aos="fade-up-right"
                data-aos-duration="1000"
                className="w-75  mx-auto "
              />
            </div>
            {/* sec row */}
            <div className="col-lg-6 col-12 col-md-6 mt-5 text-lg-start text-center mt-5" data-aos="fade-up-right"
              data-aos-duration="1000">
              <h3 className=" headingfont text-yellow ">
                LEADERBOARD <br className="d-lg-block d-none" /> SPONSERSHIP
              </h3>
              <p className="w-100 border-yellow">
                Sponsorship allows PR and Awareness campaigns within <br className="d-none d-lg-block" />
                DefinityLegend to provide monetary and gaming rewards for <br className="d-none d-lg-block" />
                players and the eco-system. Blockchains can promote their native <br className="d-none d-lg-block" />
                tokens while expanding utility and awareness. <br className="d-none d-lg-block" />
              </p>
            </div>
            <div className="col-lg-6 col-12 col-md-6 mt-5 text-lg-start text-center mt-5" data-aos="fade-up-left"
              data-aos-duration="1000">
              <img
                src={process.env.PUBLIC_URL + "assets/images/G-2.png"}
                alt=""
                className="w-100  mx-auto "
              />
            </div>
            {/* third row */}

            <div className="col-lg-6 col-12 col-md-6   mt-5 text-lg-start text-center mt-5" data-aos="fade-up-left"
              data-aos-duration="1000">
              <h3 className=" headingfont text-yellow ">Avatars</h3>
              <p className="w-100 border-yellow">
                Bring your <span className="text-yellow text-bold">NFTs</span>
                to life <br className="d-none d-lg-block" /> Play as either a{" "}
                <span className="text-yellow text-bold">
                  Personalized Avatar
                </span>
                , <span className="text-yellow text-bold"> NPC </span>, or
                <span className="text-yellow text-bold"> Mob </span> <br className="d-none d-lg-block" /> Playable in
                any of the games created in{" "}
                <span className="text-yellow text-bold"> DLD </span> Verse <br className="d-none d-lg-block" />
                Welcoming <span className="text-yellow text-bold"> NFT </span>
                Art projects
              </p>
            </div>
            <div className="col-lg-6 col-12 col-md-6 mt-5 text-lg-start text-center mt-5" data-aos="fade-up-right"
              data-aos-duration="1000">
              <img
                src={process.env.PUBLIC_URL + "assets/images/G-3.png"}
                alt=""
                className="w-100  mx-auto "
              />
            </div>
            {/* fourth row */}
            <div className="d-flex justify-content-center flex-wrap align-items-center"  >
              <div className="col-lg-6 col-12 pt-lg-5 d-lg-block d-none  col-md-6 mt-5 text-lg-start text-center mt-5" data-aos="fade-up-left"
                data-aos-duration="1000" >
                <img
                  src={process.env.PUBLIC_URL + "assets/images/G-4.png"}
                  alt=""
                  className="w-100 mx-auto "
                />
              </div>
              <div className="col-lg-6 col-12 pt-lg-5 col-md-6 mt-5 text-lg-start text-center mt-5" data-aos="fade-up-right"
                data-aos-duration="1000" >
                <h3 className="headingfont2 ">
                  <img src={process.env.PUBLIC_URL + "assets/headings/multiple.png"} className="mli img-fluid" alt="" />

                  {/* <span className="me-1 neon headingfont2  text-style text-yellow">
                    Multiple
                  </span> */}
                  Game Modes ,<br /> Styles and Genres,Creating <br />
                  <span >
                    <img src={process.env.PUBLIC_URL + "assets/headings/limit.png"} className="mli img-fluid" alt="" />

                  </span>
                  <br className="d-lg-none d-block" />
                  Possibilities
                </h3>
                <div className="border-yellow text-start ms-lg-0 ms-4 ">
                  <div className="d-flex gap-2">
                    <FaAngleRight />
                    <p className="w-100 fs-8 faded-color d-flex">
                      Game mods that will continue to grow <br className="d-none d-lg-block" />
                      with community support
                    </p>
                  </div>
                  <div className="d-flex gap-2">
                    <FaAngleRight />
                    <p className="w-100 fs-8 faded-color">
                      Multiple Genres all in one eco-system
                    </p>
                  </div>
                  <div className="d-flex gap-2">
                    <FaAngleRight />
                    <p className="w-100 fs-8 faded-color">
                      Earn exclusive rewards and competitions <br className="d-none d-lg-block" />  with leaderboards, and prizes set by <br className="d-none" />  sponsors
                    </p>
                  </div>
                  <div className="d-flex gap-2">
                    <FaAngleRight />

                    <p className="w-100 fs-8 faded-color">
                      and owners to earn from banners, NFT Arts <br className="d-none d-lg-block" /> implemented in-game, Advertising and <br className="d-none d-lg-block" /> Sponsorships!
                    </p>
                  </div>




                </div>
              </div>
              <div className="col-lg-6 col-12 pt-lg-5 d-lg-none d-block   col-md-6 mt-5 text-lg-start text-center mt-5" data-aos="fade-up-left"
                data-aos-duration="1000" >
                <img
                  src={process.env.PUBLIC_URL + "assets/images/G-4.png"}
                  alt=""
                  className="w-100 mx-auto "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cus-text" >
        <div className="container mt-lg-5 pt-lg-5 mt-5">
          <div className="text-center mt-lg-3 ">
            <h1 className="headingfont2">
              <span >
                <img src={process.env.PUBLIC_URL + "assets/headings/uti.png"} className="img-fluid ulti" alt="" />

              </span>
              of DLD Coin
            </h1>
            <p className=" mx-auto faded-color fs-8">
              DLD Coins is the utility currency that can be used to trade for a
              variety <br className="d-lg-block d-none" /> of items in game. The most common use is acquiring new
              heroes,<br className="d-lg-block d-none" /> equipment and guardians.
            </p>
          </div>
          <div className=" ">
            {slider == 0 ? <Dld /> : <Bitt />}

            <div className="d-flex gap-2 justify-content-center">
              <div className=" d-flex align-items-center flex-column">
                <label className="d-flex justify-content-center align-items-center flex-column" >
                  <img src="assets/images/DLD.png" className="DLD" alt="" />

                  <input type="radio" onClick={() => { setslider(0); setbutton(false) }} className="d-none" checked name="yellow-radio" />
                  <span className="d-flex radio-circle" style={{ backgroundColor: (button == 0 ? 'var(--primary-yellow)' : "transparent") }} >
                    {/* {"myClass " + (position === index ? 'active' : null)} */}
                  </span>
                  
                </label>
              </div>
              <div className=" d-flex align-items-center justify-content-center flex-column">
                <label className="d-flex justify-content-center align-items-center flex-column" >
                  <img src="assets/images/BITT.png" className="BITT" alt="" />
                  <input type="radio" onClick={() => { setslider(1); setbutton(1) }} name="yellow-radio" className="d-none" />
                  <span className="radio-circle d-flex " style={{ backgroundColor: (button == 1 ? 'var(--primary-yellow)' : "transparent") }} >

                  </span>
                  
                </label>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-lg-5 pt-lg-5 mt-5 ">
          <div className="div text-center">
            <h1 className="headingfont2  ">Our Contributors</h1>
            <p className="fs-8 faded-color">
              BITTO and DeFinity Studio present a combined experience of more
              than 20 years of gaming experience and 10 <br /> years of experience
              within cryptocurrency and blockchain creating a powerful
              synergistic team combination.
            </p>
          </div>
          <div className="slider3 position-r  ">
            <div className="angleLeft" onClick={() => Srightarrow3()}>
              <FaAngleLeft />
            </div>
            <div className="angleRight" onClick={() => Srightarrow4()}>
              <FaAngleRight />
            </div>
            <Slider {...settings3}>
              <div className="my-lg-5">
                <div className="text-center">
                  <img
                    src={process.env.PUBLIC_URL + "assets/images/contri.png"}
                    alt=""
                    className="mx-auto"
                  />
                  <h6 className="mt-3 my-0">Harold Klemp</h6>
                  <p className="fs-8 text-faded mt-2">Game tester</p>
                </div>
              </div>
              <div className="my-lg-5">
                <div className="text-center">
                  <img
                    src={process.env.PUBLIC_URL + "assets/images/contri.png"}
                    alt=""
                    className="mx-auto"
                  />
                  <h6 className="mt-3 my-0">Harold Klemp</h6>
                  <p className="fs-8 text-faded mt-2">Game tester</p>
                </div>
              </div><div className="my-lg-5">
                <div className="text-center">
                  <img
                    src={process.env.PUBLIC_URL + "assets/images/contri.png"}
                    alt=""
                    className="mx-auto"
                  />
                  <h6 className="mt-3 my-0">Harold Klemp</h6>
                  <p className="fs-8 text-faded mt-2">Game tester</p>
                </div>
              </div><div className="my-lg-5">
                <div className="text-center">
                  <img
                    src={process.env.PUBLIC_URL + "assets/images/contri.png"}
                    alt=""
                    className="mx-auto"
                  />
                  <h6 className="mt-3 my-0">Harold Klemp</h6>
                  <p className="fs-8 text-faded mt-2">Game tester</p>
                </div>
              </div><div className="my-lg-5">
                <div className="text-center">
                  <img
                    src={process.env.PUBLIC_URL + "assets/images/contri.png"}
                    alt=""
                    className="mx-auto"
                  />
                  <h6 className="mt-3 my-0">Harold Klemp</h6>
                  <p className="fs-8 text-faded mt-2">Game tester</p>
                </div>
              </div><div className="my-lg-5">
                <div className="text-center">
                  <img
                    src={process.env.PUBLIC_URL + "assets/images/contri.png"}
                    alt=""
                    className="mx-auto"
                  />
                  <h6 className="mt-3 my-0">Harold Klemp</h6>
                  <p className="fs-8 text-faded mt-2">Game tester</p>
                </div>
              </div><div className="my-lg-5">
                <div className="text-center">
                  <img
                    src={process.env.PUBLIC_URL + "assets/images/contri.png"}
                    alt=""
                    className="mx-auto"
                  />
                  <h6 className="mt-3 my-0">Harold Klemp</h6>
                  <p className="fs-8 text-faded mt-2">Game tester</p>
                </div>
              </div><div className="my-lg-5">
                <div className="text-center">
                  <img
                    src={process.env.PUBLIC_URL + "assets/images/contri.png"}
                    alt=""
                    className="mx-auto"
                  />
                  <h6 className="mt-3 my-0">Harold Klemp</h6>
                  <p className="fs-8 text-faded mt-2">Game tester</p>
                </div>
              </div><div className="my-lg-5">
                <div className="text-center">
                  <img
                    src={process.env.PUBLIC_URL + "assets/images/contri.png"}
                    alt=""
                    className="mx-auto"
                  />
                  <h6 className="mt-3 my-0">Harold Klemp</h6>
                  <p className="fs-8 text-faded mt-2">Game tester</p>
                </div>
              </div><div className="my-lg-5">
                <div className="text-center">
                  <img
                    src={process.env.PUBLIC_URL + "assets/images/contri.png"}
                    alt=""
                    className="mx-auto"
                  />
                  <h6 className="mt-3 my-0">Harold Klemp</h6>
                  <p className="fs-8 text-faded mt-2">Game tester</p>
                </div>
              </div><div className="my-lg-5">
                <div className="text-center">
                  <img
                    src={process.env.PUBLIC_URL + "assets/images/contri.png"}
                    alt=""
                    className="mx-auto"
                  />
                  <h6 className="mt-3 my-0">Harold Klemp</h6>
                  <p className="fs-8 text-faded mt-2">Game tester</p>
                </div>
              </div><div className="my-lg-5">
                <div className="text-center">
                  <img
                    src={process.env.PUBLIC_URL + "assets/images/contri.png"}
                    alt=""
                    className="mx-auto"
                  />
                  <h6 className="mt-3 my-0">Harold Klemp</h6>
                  <p className="fs-8 text-faded mt-2">Game tester</p>
                </div>
              </div><div className="my-lg-5">
                <div className="text-center">
                  <img
                    src={process.env.PUBLIC_URL + "assets/images/contri.png"}
                    alt=""
                    className="mx-auto"
                  />
                  <h6 className="mt-3 my-0">Harold Klemp</h6>
                  <p className="fs-8 text-faded mt-2">Game tester</p>
                </div>
              </div>
              <div className="my-lg-5">
                <div className="text-center">
                  <img
                    src={process.env.PUBLIC_URL + "assets/images/contri.png"}
                    alt=""
                    className="mx-auto"
                  />
                  <h6 className="mt-3 my-0">Harold Klemp</h6>
                  <p className="fs-8 text-faded mt-2">Game tester</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-lg-5 pt-lg-5 pt-2 mt-3">
          <div className="row align-items-start">
            <div className="col-12 col-lg-6 col-md-6 text-lg-start text-center mt-5 " data-aos="fade-up-left"
              data-aos-duration="1000" >
              <div className=" ">
                <h1 className="headingfont2">Marketplace</h1>
                <p className="fs-8 faded-color mt-lg-3">
                  Bring your NFT to life within the DLD world by selling it on
                  the DLD marketplace. If it's popular and if it aligns with our
                  style, we will put it in as a seasonal character!synergistic
                  team combination.
                </p>
                <p className="text-yellow  mt-lg-4 mt-1 ">
                  Buy & Sell DLD land. Play To Earn as you sell DLD NFT assets.
                  Safe, secure and transparent transactions.
                </p>
                <div className="d-flex justify-content-lg-start justify-content-center my-3">
                  <button className="cust_btn d-flex justify-content-between align-items-center">

                    <span className="btn-play">
                      <BsShop />
                    </span>
                    <p className="mb-0 mx-3 ">Visit Market</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 text-center col-md-6" data-aos="fade-up-right"
              data-aos-duration="1000" >
              <img
                src={process.env.PUBLIC_URL + "assets/images/G-5.png"}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        {/* new row */}
        <div className="container mt-lg-5 pt-lg-5 pt-2 mt-3">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 col-md-6 text-lg-start text-center mt-5 " data-aos="fade-up-left"
              data-aos-duration="1000" >
              <div className=" ">
                <h1 className="headingfont2">Heroes & Guardian Collection</h1>

                <div className="d-flex justify-content-lg-start  justify-content-center my-3">
                  <button className="cust_btn d-flex justify-content-between py-1 align-items-center">

                    <span className="btn-play">
                      <FiLayers />
                    </span>
                    <p className="mb-0 mx-3 ">
                      Visit Your Private DLD Collection
                    </p>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-6" data-aos="fade-up-right"
              data-aos-duration="1000" >
              <div className="text-center">
                <img
                  src={process.env.PUBLIC_URL + "assets/images/G-6.png"}
                  alt=""
                  className="img-fluid "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-lg-5 pt-lg-5">
          <div className="text-center">
            <h1 className="headingfont">Our Partners</h1>
            <img
              src={process.env.PUBLIC_URL + "assets/images/part.png"}
              alt=""
              className=" mt-5 w-100"
            />
          </div>
        </div>
      </section>

    </>
  );
}
