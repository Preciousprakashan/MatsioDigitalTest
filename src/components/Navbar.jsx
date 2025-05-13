import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        "Home",
        "Services",
        "About Us",
        "Order Company",
        "Apply for Tax Rebate",
        "Blog",
        "Contact"
    ];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="fixed-navbar-wrapper">
            <div className={`top-bar ${menuOpen ? 'show-on-mobile' : ''}`}>
                <div className="containernav">
                    <div className="top-left">
                        <span><i className="fas fa-phone-alt"></i> 087 245 0049 / 01 8137811</span>
                        <span><i className="fas fa-envelope"></i> contact@sample.ie</span>
                        <span><i className="fas fa-clock"></i> Mon-Thu: 8:00 am to 9:00 pm</span>
                    </div>
                    <div className="top-right">
                        <a href="#" className="circle-img-icon">
                            <img src="https://img.icons8.com/?size=100&id=118467&format=png&color=ffffff" alt="Facebook" />
                        </a>
                        <a href="#" className="circle-img-icon">
                            <img src="https://img.icons8.com/?size=100&id=60452&format=png&color=ffffff" alt="Twitter" />
                        </a>
                        <a href="#" className="circle-img-icon">
                            <img src="https://img.icons8.com/?size=100&id=102748&format=png&color=ffffff" alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>

            <nav className="main-navbar">
                <div className="containernav">
                    <div className="logo">
                        <img src="https://img.icons8.com/ios-filled/50/000000/task.png" alt="Logo" />
                    </div>


                    <button className="navbar-toggle" onClick={toggleMenu}>
                        ☰
                    </button>

                    <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
                        {links.map((label, index) => (
                            <li key={index}>
                                <a
                                    href="#"
                                    className={activeIndex === index ? "active" : ""}
                                    onClick={() => {
                                        setActiveIndex(index);
                                        setMenuOpen(false);
                                    }}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
