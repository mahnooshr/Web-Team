import React  from "react";
import '../styles/pages_general.css';
import Login from './login';
import CardGrid from '../components/card_grid';

export default function Home() {
    return (
        <div className="container">
            <h1>Categories</h1>
            <bl></bl>
            <CardGrid />
        </div>
    );
}