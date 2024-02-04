import React from 'react';
import '../styles/card.css';

const Card = ({name, description, image}) => {
    return (
      <div className="card">
        <img src={image} alt={name}/>  
        <h3>{name}</h3>
        <p>{description}</p>
        <img src="explore.png"  alt={'explore'} width="50" height="50"/> 
      </div>
    )
  }

export default Card;