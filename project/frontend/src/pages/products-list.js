import React from "react";
import ProductLi from "../components/product_li";

export default function ProductsList(probs) {
    const products = [...Array(10).keys()].map((i) => 
        (
            <ProductLi product={(
                {
                    id: i + 1,
                    name: "Product " + String(i),
                    price: 100,
                    description: "This is a product",
                    image: "gift-card.png"
                }
            )} />
        )
    );

    return (
        <div className="container">
            <h1>Products</h1>
            <ul className="products-list">
                {products}
            </ul>
        </div>
    );
}