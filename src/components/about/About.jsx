import React from 'react'
import './About.css'
import aboutImage1 from '../../img/mon1.jpg';
import aboutImage2 from '../../img/mon2.jpg';
import aboutImage3 from '../../img/mon3.jpg';
import aboutImage4 from '../../img/mon4.jpg';
import aboutImage5 from '../../img/mon5.jpg';
import aboutImage6 from '../../img/mon6.jpg';
import aboutImage7 from '../../img/mon7.jpg';
import aboutImage8 from '../../img/mon8.jpg';
import aboutImage9 from '../../img/mon9.jpg';
import aboutImage10 from '../../img/mon10.jpg';
import aboutImage11 from '../../img/mon11.jpg';
import aboutImage12 from '../../img/mon12.jpg';
import aboutImage13 from '../../img/mob1.jpg';
import aboutImage14 from '../../img/mob2.jpg';
import aboutImage15 from '../../img/mob3.jpg';
import aboutImage16 from '../../img/mob4.jpg';
function About() {
  return (
    <>
    <div className="Furniture">
        <h1>Furniture</h1>
       </div>
    <section className="about" id="about">
       
        <div className="about-img-grid">
            <img src={aboutImage1} alt="Furniture piece 1" />
            <img src={aboutImage2} alt="Furniture piece 2" />
            <img src={aboutImage3} alt="Furniture piece 3" />
            <img src={aboutImage4} alt="Furniture piece 4" />
            <img src={aboutImage5} alt="Furniture piece 5" />
            <img src={aboutImage6} alt="Furniture piece 6" />
            <img src={aboutImage7} alt="Furniture piece 7" />
            <img src={aboutImage8} alt="Furniture piece 8" />
            <img src={aboutImage9} alt="Furniture piece 9" />
            <img src={aboutImage10} alt="Furniture piece 10" />
            <img src={aboutImage11} alt="Furniture piece 11" />
            <img src={aboutImage12} alt="Furniture piece 12" />
            
        </div>
    </section>
    </>
  )
}

export default About