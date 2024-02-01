// create a nav with logo, search bar, and links to other pages
// this is the main navigation bar that is displayed on every page

import React from 'react';
import './gnav.css';

function Gnav() {
    return (
        <div className="gnav">
            <div className="gnav-logo">
                <img src="logo.png" alt="logo" />
            </div>
            <div className="gnav-search">
                <input type="text" placeholder="Search" />
                <button type="submit">Search</button>
            </div>
            <div className="gnav-links">
                <a href="home">Home</a>
                <a href="about">About</a>
                <a href="contact">Contact</a>
            </div>
        </div>
    );
    }

export default Gnav;

