import React from 'react'
import { AiFillPlayCircle } from "react-icons/ai";

const Banner = (Ban) => {
  return (
    <section className="banner" id='top2'>
      <button className="cust_btn floating shake d-flex justify-content-between align-items-center">
        <AiFillPlayCircle className="fs-1 text-primary" />
        <p className="mb-0 mx-3 ">Watch Trailer</p>
      </button>
    </section>
  );
}

export default Banner