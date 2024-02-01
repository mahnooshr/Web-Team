import React from 'react';
import './card.css';

function Card() {
    return (
        <div className="card">
            <div className="card-image">
                <img src="card-image.png" alt="card" />
            </div>
            <div className="card-content">
                <h2>Card Title</h2>
                <p>Card Description</p>
                <button>Read More</button>
            </div>
        </div>
    );
}

export default Card;