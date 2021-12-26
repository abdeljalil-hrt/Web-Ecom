import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'
import { Link } from 'react-router-dom'
function HeroSection() {
    return (
        <div className='hero-container' >
            <video src='/videos/qlf.mp4' autoPlay loop muted></video>
            <h1>QLF STORE</h1>
            <p>What are you waiting for</p>
            <div className='hero-btns'>
                <Link to='/products'>
                    <button className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'

                    >
                        SHOP NOW
                    </button>
                </Link>
                <button className='btn'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'

                >
                    <a href='https://www.youtube.com/watch?v=BtyHYIpykN0' target='_blank'>WATCH CLIP </a>  <i className='far fa-play-circle' />
                </button>

            </div>
        </div>
    )
}

export default HeroSection
