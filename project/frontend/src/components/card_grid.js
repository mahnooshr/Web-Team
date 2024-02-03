import React from "react";
import Card from "./card.js";
import "../styles/card_grid.css";

const cards = [
    { 
      name: "Flights",
      description: "Flight tickets & travel packages",
      image: "/flightcart.png"
    },
    {
      name: "Games", 
      description: "fun and games",
      image: "game.png"  
    },
    {
      name: "Food",
      description: "cafe's and restaurants",
      image: "foods.png"
    },  
    {
      name: "services",
      description: "Internet and proxy services",
      image: "internet.png"
    } 
  ].map((card) => (
    <Card 
      name={card.name}
      description={card.description}
      image={card.image}
    />
  ));
function CardGrid() {
    return (
        <div className="card-grid">
            {cards}
        </div>
    );
    }

export default CardGrid;