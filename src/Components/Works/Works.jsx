import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
//import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'

const Works = () => {
  return (
    <div className="works">

<div className="awesome">
                <span>Works for all these</span>
                <span>Brands & Clients</span>
                <spane>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti,
                    <br />
                    expedita nisi non qui laborum mollitia voluptates voluptatibus,
                    <br/>
                    <br/>
                    expedita nisi non qui laborum mollitia
                    <br /> perferendis ratione quod ea velit est, rerum doloribus quas vero distinctio! Beatae, unde.
                </spane>
                <button className='button s-button'>Hire Me</button>
                <div className='blur s-blur1' style={{ background: "#ABF1FF94" }}></div>
            </div>

         {/* Right side*/}
         <div className="w-right">
           <div className="w-mainCircle">
             <div className="w-secCircle">
               <img src={Upwork} alt='' />
             </div>
             <div className="w-secCircle">
               <img src={Fiverr} alt='' />
             </div>
             <div className="w-secCircle">
               <img src={Shopify} alt='' />
             </div>
             <div className="w-secCircle">
               <img src={Facebook} alt='' />
             </div>
           </div>


           {/* background circles */}
           <div className="w-backCircle blueCircle"></div>
           <div className="w-backCircle yellowCircle"></div>           
         </div>
    </div>

   )
  }

export default Works