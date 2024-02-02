import React from 'react';
import '../styles/card.css';

function Card(props) {
    const card = props.card;
    return (
        <div className="card">
            <img className='card-image' src={card.image} alt={card.name} />
            <div className="card-content">
                <div className='card-name'>{card.name}</div>
                <div className='card-description'>{card.description}</div>
                <button className='card-button'>Explore</button>
            </div>
        </div>
    );
}

export default Card;