import React from 'react'
import "./Footer.css"

import Github from '../../img/gitttt.png';
import LinkedIn from '../../img/linkeddd.png';
import Instagram from '../../img/ii.png';

import Wave from '../../img/wave.png'

const Footer = () => {
  return (
   <div className="footer">
    <img src={Wave} alt="" style={{width:'100%'}} />
    
    <div className="f-content">
        <span>bhismarajjoshi3304@gmail.com</span>

        <div className="f-icons">
                    <a href='https://github.com/bhismaraj'>
                        <img  src={Github} alt="" />
                    </a>
                    <a href='https://www.linkedin.com/in/bhisma-raj-joshi-17a777172/'>
                        <img src={LinkedIn} alt="" />
                    </a>
                    <a href='https://www.instagram.com/3_33zx/'>
                        <img src={Instagram} alt="" />
                    </a>

                </div>
    </div>
   </div>
  )
}

export default Footer
