import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-container">
            <div className="hero-inner">
                <div className="hero-content-left">
                    <h1>Take The Right Step<br />For Your Business</h1>
                    <p>
                        TAx Associate is a leading consultancy firm that provides simple,
                        effective company registration, and accounting solutions to
                        enterprises in Ireland.
                    </p>
                    <button className="hero-btn">Get Started</button>
                </div>

                <div className="hero-form-card">
                    <h2>Apply For Tax Rebate Now</h2>
                    <form className="hero-form">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" />

                        <label htmlFor="email">Email ID</label>
                        <input type="email" id="email" name="email" />

                        <label htmlFor="pps">PPS Number</label>
                        <input type="text" id="pps" name="pps" />

                        <div className="checkbox-container">
                            <input type="checkbox" id="agreement" />
                            <label htmlFor="agreement">
                                I have read & agreed to the authorisation and the{' '}
                                <a href="#">terms & conditions</a>.
                            </label>
                        </div>

                        <button type="submit" className="apply-btn">
                            Apply
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
