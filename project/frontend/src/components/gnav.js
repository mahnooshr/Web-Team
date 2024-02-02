// create a nav with logo, search bar, and links to other pages
// this is the main navigation bar that is displayed on every page

import React from 'react';
import '../styles/gnav.css';
import IconButton from '../components/icon_button';

function Gnav() {
    return (
        <div className="gnav">
            <div className="gnav-logo">
                <img src="logo.png" alt="logo" />
            </div>
            <div className="gnav-search">
                <input type="text" placeholder="Search" />
                <IconButton icon="search.png" alt="search" />
            </div>
            <div className="gnav-links">
                <a href="/"> Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/cart">Cart</a>
                <a href="/products">Products</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
    }

export default Gnav;

