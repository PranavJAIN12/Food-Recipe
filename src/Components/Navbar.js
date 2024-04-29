import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <h1 className='navbar-head'>FoodJunction</h1>
            <div className='desktopMenu'>
                <Link to='/' className='desktopMenuListItem'>Home</Link>
                <Link to='/excercise' className='desktopMenuListItem'>Excercise</Link>
                
                
            </div>

                <button className="navbarBtn btn">Contact Me</button>

    </nav>
  )
}
