import React from 'react'
import './home.css'
import Social from './Social'

const Home = () => {
  return (
    <div>
        <section className="home section" id="home">
            <div className="home__container container">
                <div className="home__content grid">
                    <Social></Social>
                    <div className="home__img"></div>
                    <Data></Data>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home