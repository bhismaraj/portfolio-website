import React from 'react'
import './Toogle.css'

import Sun from '../../img/sun.png'
import Moon from '../../img/moon.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'



export const Toogle = () => {
  const theme = useContext (themeContext)
  const darkMode =theme.state.darkMode

  const handleClick =() => {
    theme.dispatch({type: 'toogle'})
  }
  return (
    <div className="toogle">
                              
        <img src={Sun} alt="" />
        <img src={Moon} alt="" />
        <div className="t-button"
        onClick ={handleClick}
        style={ darkMode? {left: '2px'} :{right: '2px'} }
        >

        </div>



    </div>

  )
}
