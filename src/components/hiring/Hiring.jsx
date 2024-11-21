import React from 'react'
import './Hiring.css'
import hiring1 from '../../img/hiring.png'
function Hiring() {
  return (
    <section className="hiring" id="hiring">
        
        <div className="hiring-text">
            <h1>Join Our Team</h1>
            <form className="hiring-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="resume">Resume:</label>
                    <input type="file" id="resume" name="resume" required />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
        <div className="hiring-img">
            <h1 className='hiring-h1'>Operations Manager</h1>
            <p>Oversee business activities to ensure profitability, 
                high performance, and excellent customer service. 
                Report and anlyze sales activities and performance data to measure productivity.
                Determine areas of cost reduction and marketing program improvement.Supervise and arrange full order cycle.Oversee inventory procurement and review reports of company's inventory. 
                Liasie and negotiate with suppliers, manufacturers,retailers, and consumers.</p>
                <br />
            <p>24 Months of Experience in the Job or as a General Manager ; M-F, 40 hrs./wk;Send Resume to Suleyman Kocabas, Owner, MyMob LLC, 5624 NW, 79th Ave, Doral, FL, 33166.</p>   
             
        </div>
    </section>
  )
}

export default Hiring