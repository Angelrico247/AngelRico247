import React from 'react'
import "./about.css"

const Info_2 = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <box-icon name='award'></box-icon>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">8 Years Working</span>
        </div>

        <div className="about__box">
        <box-icon name='briefcase-alt'></box-icon>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">48 + Projects</span>
        </div>

        <div className="about__box">
        <box-icon name='support'></box-icon>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  )
}

export default Info_2