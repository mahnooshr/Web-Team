import React from 'react';
import '../styles/card.css';

const Card = ({name, description, image}) => {
    return (
      <div className="card">
        <img className='card-image' src={image} alt={name}/>  
        <h3 className='card-name'>{name}</h3>
        <p className='card-description'>{description}</p>
        <img className='card-button' src="explore.png"  alt={'explore'} width="50" height="50"/> 
      </div>
    )
  }

export default Card;