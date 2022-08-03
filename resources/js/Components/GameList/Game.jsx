import React from "react";

export default function Game(props) {

    return (
        <div key={props.key} className="game">
            <img src={props.img} alt="game-img" />
            <div className="card-footer">
                <div className="card-title">
                    <h3>{props.title}</h3>
                </div>
                <div className="card-cart-section">
                    <h2>{props.price}</h2>
                </div>
            </div>
        </div>
    )
}