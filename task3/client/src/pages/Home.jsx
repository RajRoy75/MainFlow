import React from 'react';
import '../css/style.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <header>
                <div className="logo">
                    <img src={require('../images/logo.png')} alt="Skooli Logo" />
                    <h1>Skooli</h1>
                </div>
                <nav>
                    <ul>
                        <li><a href="/#">Features</a></li>
                        <li><a href="/#">Categories</a></li>
                        <li><a href="/#">Bootcamp</a></li>
                        <li><a href="/#">Tutors</a></li>
                        <li><a href="/#">Blogs</a></li>
                        <Link to={'/login'} style={{ textDecoration: 'none'}}>
                        <li>Log in</li>
                        </Link>
                        <Link to={'/signup'} style={{ textDecoration: 'none'}}>
                        <li>Sign Up</li>
                        </Link>

                        {/* <li><a href="/#" classNameName="sign-up">Sign Up</a></li> */}
                    </ul>
                </nav>
            </header>
            <main>
                <section className="hero">
                    <div className="hero-text">
                        <span className="badge">#No 1 Platform for learning</span>
                        <h2>Discover new things to enrich your skill anytime anywhere</h2>
                        <p>Education began in prehistory, as adults trained the young in the knowledge and skills deemed necessary in their society.</p>
                        <a href="/#" className="cta-button">Enroll Now</a>
                    </div>
                    <div className="hero-image">
                        <img src={require('../images/student.jpg')} alt="Students" />
                    </div>
                </section>
                <section className="features">
                    <h2>Why Choose Us</h2>
                    <div className="features-grid">
                        <div className="feature">
                            <img src={require('../images/badge.png')} alt="Feature 1" />
                            <h3>High Quality Content</h3>
                            <p>Access top-notch educational materials and resources tailored to your needs.</p>
                        </div>
                        <div className="feature">
                            <img src={require('../images/virtual-class.png')} alt="Feature 2" />
                            <h3>Expert Tutors</h3>
                            <p>Learn from industry experts and experienced professionals.</p>
                        </div>
                        <div className="feature">
                            <img src={require('../images/online-translator.png')} alt="Feature 3" />
                            <h3>Flexible Learning</h3>
                            <p>Study at your own pace, anytime and anywhere.</p>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>About Us</h3>
                        <p>We are committed to providing the best online learning experience.</p>
                    </div>
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/#">Features</a></li>
                            <li><a href="/#">Categories</a></li>
                            <li><a href="/#">Tutors</a></li>
                            <li><a href="/#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Follow Us</h3>
                        <ul className="socials">
                            <li><a href="/#"><img src={require('../images/facebook.png')} alt="Facebook" /></a></li>
                            <li><a href="/#"><img src={require('../images/twitter.png')} alt="Twitter" /></a></li>
                            <li><a href="/#"><img src={require('../images/social.png')} alt="Instagram" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Skooli. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Home