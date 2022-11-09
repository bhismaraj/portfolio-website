import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import vector1 from '../../img/Vector1.png';
import vector2 from '../../img/Vector2.png';
import BB from '../../img/BB.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import { FloatingDiv } from '../FloatingDiv/FloatingDiv';



const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hello I Am </span>
                    <span>BHISMA RAJ </span>
                    <span>Full-Stack Developer with high level of experience in web designing and development, producting the quality work.</span>
                </div>
                <button className=" button i-button">Hire Me</button>
                <div className="i-icons">
                    <a href='https://github.com/bhismaraj'>
                        <img src={Github} alt="" />
                    </a>
                    <a href='https://www.linkedin.com/in/bhisma-raj-joshi-17a777172/'>
                        <img src={LinkedIn} alt="" />
                    </a>
                    <a href='https://www.instagram.com/3_33zx/'>
                        <img src={Instagram} alt="" />
                    </a>

                </div>
            </div>
            <div className="i-right">
                <img src={vector1} alt="" />
                <img src={vector2} alt="" />
                <img src={BB} alt="" />
                <img src={glassesimoji} alt="" />
                <div style={{ top: '-2%', left: '65%' }}>
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
                </div>
                <div style={{ top: '24rem', left: '10rem' }}>
                    <FloatingDiv image={thumbup} txt1='Best Designer' />
                </div>

                {/* blurr divs  */}
                <div className='blur' style={{ background: "rgb(238 210 255)" }}>
                </div>
                <div className="blur" style={{ background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}></div>

            </div>
        </div>
    )
}


export default Intro