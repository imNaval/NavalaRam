// import React from 'react'
import "../styles/navbar.scss"
import {motion} from 'framer-motion'
import Sidebar from "./Sidebar"
// import facebook from "../../public/facebook.png"

const Navbar = () => {
  return (
    <div className='navbar'>
        {/* Sidebar */}
        <Sidebar />
        
        <div className='wrapper'>
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}} >Naval Nehra</motion.span>
            <div className='social'>
                <a href="#"><img alt="fb" src='facebook.png' /></a>
                <a href="#"><img alt="yt" src='youtube.png' /></a>
                <a href="#"><img alt="insta" src='instagram.png' /></a>
                <a href="#"><img alt="dbb" src='dribbble.png' /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar