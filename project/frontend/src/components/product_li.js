import React from "react";
import "../styles/products.css";

export default function ProductLi(props) {
    const product = props.product;
    return (
        <div className="product-li">
            <div className="product-li-left">
                <img className="product-li-icon" src={product.image} alt="Product" />
                <div className="product-li-name">{product.name}</div>
            </div>
            <div className="product-li-info">{product.description}</div>
            <div className="product-li-price">${product.price}</div>
            <button className="product-li-button">Add to cart</button>
        </div>
    );
}