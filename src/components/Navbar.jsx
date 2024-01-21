// import React from 'react'
import "../styles/navbar.scss"
// import facebook from "../../public/facebook.png"

const Navbar = () => {
  return (
    <div className='navbar'>
        {/* Sidebar */}
        <div className='wrapper'>
            <span>Naval Nehra</span>
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