import React from "react";
import Card from "./card.js";
import "../styles/card_grid.css";

const cards = [...Array(4).keys()].map((i) => 
(
    <Card card={(
        {
            name: "Category " + String(i + 1),
            description: "This is a category",
            image: "gift-card.png"
        }
    )} />
)
);

function CardGrid() {
    return (
        <div className="card-grid">
            {cards}
        </div>
    );
    }

export default CardGrid;