import React from "react";

export const Product = (props) => {
    const {id, productName, price} = props.data;
    return (
    <div className="product">

        {/* image */}

        <div className="description">
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
        </div>
    </div>
    )
}