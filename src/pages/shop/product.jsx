import React from "react";


export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    return (
    <div className="product">

        <img src={productImage} alt="Image" />

        <div className="description">
            <p>
                <h2>{productName}</h2>
            </p>
            <p className="price">{price}€</p>
        </div>

        <button className="button"> Add to Cart </button>
    </div>
    )
}