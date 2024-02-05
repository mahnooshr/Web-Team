import React from 'react';
import '../styles/card.css';
import IconButton from './icon_button';

const Card = ({name, description, image}) => {
    return (
      <div className="card">
        <img className='card-image' src={image} alt={name}/>  
        <h3 className='card-name'>{name}</h3>
        <p className='card-description'>{description}</p>
        <IconButton className='card-button' icon="explore.png" alt="explore" onClick={() => {
            alert('explore');
        }} />
      </div>
    )
  }

export default Card;