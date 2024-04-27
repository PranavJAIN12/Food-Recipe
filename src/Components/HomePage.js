import React from 'react'
import banner from '../food.jpg'
import './HomePage.css'
export default function HomePage() {
  return (
    <section id='heroBanner'>
      <div className='left-container'>
        <h1>Welcome to Food Recipi app</h1>
        <p>Check Out the most recipe of food items</p>
        <button className='btn'>Explore Recipe</button>
      </div>
      <div className="right-container">
        <img className='banner' src={banner} alt='img'/>
      </div>
    </section>
  )
}
