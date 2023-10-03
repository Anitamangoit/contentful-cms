import React from 'react';
import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className='hero'>
        <div className="hero-center">
            <div className="hero-title">
                <p>I'm baby pBR&B migas twee tumblr la croix grailed before they sold out farm-to-table. Crucifix chartreuse marfa paleo intelligentsia affogato cliche. Authentic lumbersexual leggings yr four loko twee fit plaid. Keffiyeh bespoke put </p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt='woman and the browser' className='img'/>
            </div>
        </div>

    </section>
  )
}

export default Hero
