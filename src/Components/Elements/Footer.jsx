import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      {/* <div className="d-flex justify-content-center mx-auto mt-lg-5 mt-2 pt-lg-5 ">
          <div className="w-cus ">
            <div className=" pur ">
              <div className="d-flex flex-column ">
                <div className="text-center pt-3">
                  <h3 className="headingfont text-shadow R-head">PRE-REGISTER</h3>
                </div>
                <img src="assets/images/input-bg.png" className='input-bg' alt="" />

                <div className="d-flex Reg">
                  <input type="text" className="px-4" />
                  <button>PRE-REGISTER</button>
                </div>
              </div>
            </div>
            <div className="soc-links d-flex justify-content-center  gap-2">
              <span>
                <FaFacebookF />
              </span>
              <span>
                <BsTelegram />
              </span>
              <span>
                <AiOutlineTwitter />
              </span>
              <span>
                <FaDiscord />
              </span>
            </div>
            <div className="d-flex justify-content-around mt-lg-4 mt-2">
              <p>Support@definitylegend.com</p>
              <p>Copyrights 2022 | Definity Legends</p>
            </div>
          </div>
        </div>
        <div className="position-r   margin-cus">
          <img
            src={process.env.PUBLIC_URL + "assets/images/Footer-right.png"}
            alt=""
            className="footer-right"
          />
          <img
            src={process.env.PUBLIC_URL + "assets/images/Footer-left.png"}
            alt=""
            className=" footer-left"
          />
        </div> */}
      <div className='position-r'>
        <div className='hello234  d-flex align-items-center'>
        <div className='hide-div'>
            Chat With Legend
          </div>
          <div>

            <a href="#top2"><img src="assets/images/dis.png" className='dis-btn ' alt="" /></a>
          </div>
          <div>

          </div>
          
        </div>

        <div className="container mt-5  "   >
          <div className="text-center  position-r ">
            <img src="assets/images/PRE-REGISTER.png" className=' text w-25' alt="" />
            <img src="assets/images/input-bg.png" className='input-bg ' alt="" />
            <img src="assets/images/button-bg.png" className=' button-bg' alt="" />
            <img src="assets/images/purple-bg.png" className='purple-bg ' alt="" />
            <input type="text" className='input-tag' />
          </div>
          <div className="text-center mt-lg-5">
            <img src="assets/images/Line.png" className='line w-100' alt="" />
          </div>
          <div className='d-flex justify-content-center'>

            <p className='mb-0 mt-3 text-gray pointer text-center headingfont'>
              HOME <code className='text-gray' >|</code> ABOUT  <code className='text-gray' >|</code> MARKETPLACE <code className='text-gray' >|</code> FOUNDER PACK <code className='text-gray' >|</code> REWARDS <code className='text-gray' >|</code> WHITEPAPER <code className='text-gray' >|</code> TOKENOMICS
            </p>
          </div>
          <div className="soc-links mt-5 d-flex justify-content-center  gap-3">
            <span>
              <FaFacebookF />
            </span>
            <span>
              <BsTelegram />
            </span>
            <span>
              <AiOutlineTwitter />
            </span>
            <span>
              <FaDiscord />
            </span>
          </div>
          <div className="text-center">
            <div className="d-lg-flex d-block justify-content-evenly  mt-lg-4 mt-2">
              <p className='fs-9 px-3 text-lg-start  '>Contact & Partnership : <br />
                Support@definitylegend.com</p>
              <p className='fs-9' >Copyrights 2022 | Definity Legends</p>
              <p className='fs-9' >Job : hello@definitylegend.com</p>
            </div>
          </div>

        </div>
        <img
          src={process.env.PUBLIC_URL + "assets/images/Footer-right.png"}
          alt=""
          className="footer-right"
        />
        <img
          src={process.env.PUBLIC_URL + "assets/images/Footer-left.png"}
          alt=""
          className=" footer-left"
        />
      </div>
    </>
  );
}
