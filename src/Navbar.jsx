import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS for styling

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo or Brand Name */}
                <Link to="/" className="navbar-logo">
                    RM FITNESS
                </Link>

                {/* Hamburger Menu for Mobile */}
                <div className="navbar-toggle" onClick={toggleMenu}>
                    <span className={`hamburger ${isMenuOpen ? "open" : ""}`}></span>
                    <span className={`hamburger ${isMenuOpen ? "open" : ""}`}></span>
                    <span className={`hamburger ${isMenuOpen ? "open" : ""}`}></span>
                </div>

                {/* Navbar Links */}
                <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
                    <li>
                        <Link to="/home" className="navbar-link" onClick={toggleMenu}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/attendance" className="navbar-link" onClick={toggleMenu}>
                            Attendance
                        </Link>
                    </li>
                    <li>
                        <Link to="/status" className="navbar-link" onClick={toggleMenu}>
                            Status
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="navbar-link" onClick={toggleMenu}>
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to="/signup" className="navbar-link" onClick={toggleMenu}>
                            Signup
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;