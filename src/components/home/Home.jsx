import React from 'react'
import './Home.css'
import foto1 from '../../img/mob1.jpg'
import foto2 from '../../img/mob2.jpg'
import foto3 from '../../img/mob3.jpg'
import foto4 from '../../img/mob4.jpg'

function Home() {
  return (
    <section className="home" id="home">
        <div className="home-text">
            <h1>
             Redefine Your Home<br/>
             Elegance and <span>Comfort</span> Await
             <p>Discover our carefully crafted furniture to create the living space of your dreams.<br/> 
             Quality, aesthetics, and functionality combined.</p>
            
            </h1>
        </div>
        <div className="home-img-grid">
            <img src={foto1} alt="Company Logo" className="logo-img" />
            <img src={foto2} alt="Company Logo" className="logo-img" />
            <img src={foto3} alt="Company Logo" className="logo-img" />
            <img src={foto4} alt="Company Logo" className="logo-img" />
            
        </div>
    </section>
  )
}

export default Home