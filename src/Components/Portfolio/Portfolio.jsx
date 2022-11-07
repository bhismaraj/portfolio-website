import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'

import Weather from "../../img/weather.png"
import Portfoli from "../../img/portfolioimg.png"
import Spotify from "../../img/spotyfyclone.png"
import AAA from "../../img/aaa.jpg"

import "swiper/css"

const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* HEADING*/}
      <span>Recent Projects</span>
      <span>Portfolio </span>

     { /* SLIDER */}
     <Swiper
     spaceBetween={40}
     slidesPerView={3}
     grabCursor={true}
     className='portfolio-slider'
     >
          <SwiperSlide>
             <img src={Weather} alt="" />
          </SwiperSlide>

          <SwiperSlide>
             <img src={Spotify} alt="" />
          </SwiperSlide>

          <SwiperSlide>
             <img src={AAA} alt="" />
          </SwiperSlide>
          
          <SwiperSlide>
             <img src={Portfoli} alt="" />
          </SwiperSlide>

          

     </Swiper>

    </div>
  )
}

export default Portfolio