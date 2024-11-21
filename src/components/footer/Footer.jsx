import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <section className="footer">
      <div className="footer-container container">
        <div className="footer-box">
          <a href="#" className="logo">My<span>Mob LLC</span></a>
          
        </div>
        <div className="footer-box">
          <a href="#home">Home</a>
          <a href="#about">Furniture</a>
          <a href="#contact">Contact</a>
          <a href="#hiring">Job Hiring</a>
        </div>
      </div>
    </section>
  )
}

export default Footer