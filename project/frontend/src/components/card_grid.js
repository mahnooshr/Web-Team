import React from "react";
import Card from "./card.js";
import "./card_grid.css";

function CardGrid() {
    return (
        <div className="card-grid">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
    }

export default CardGrid;