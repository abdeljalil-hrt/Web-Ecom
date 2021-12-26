import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Components/Button'
import './Footer.css'
function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>


                <p className='footer-subscription-text'>
                    NEWSLETTER
                </p>

                <div className='input-areas'>
                    <form>
                        <input type='email'
                            placeholder='Your Email'
                            className='footer-input'
                        />
                        <Button
                            buttonStyle='btn--outline'>
                            Subscribe
                        </Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-links-wrapper'>
                    <div className='footer-links-items'>
                        <h2>About Us</h2>
                        <Link to='/about'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Carrers</Link>

                    </div>

                    <div className='footer-links-items'>
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Carrers</Link>

                    </div>

                    <div className='footer-links-items'>
                        <h2>Social Media</h2>

                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Linkedin</Link>
                    </div>
                </div>
            </div>


            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            QUE LA FAMILLE
                            <img src='/images/heart (1).png' />
                        </Link>
                    </div>
                    <small class='website-rights'>ABDELJALIL © 2021</small>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Footer
