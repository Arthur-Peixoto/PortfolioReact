import React from 'react'
import "./skills.css"
import Frontend from './Frontend.jsx'
import Backend from './Backend.jsx'

const Skills = () => {
  return (
    <section className="skill section" id="skills">
        <h2 className="ssection__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
            <Frontend></Frontend>
            <Backend></Backend>
        </div>
    </section>
  )
}

export default Skills