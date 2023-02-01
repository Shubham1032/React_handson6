import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to='/'>
            <span>Home</span></Link>
            <Link to='/table'> <span>Students</span></Link>
            <Link to='/contact'><span>Contact Us</span></Link>
        </nav>
    </div>
  )
}

export default Navbar