import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

export default function Game(props) {

    return (
        <div className="game" key={props.id}>
            <InertiaLink href={'game/' + props.id}>
                <img src={props.img} alt="game-img" />
            </InertiaLink>
            <div className="card-footer">
                <div className="card-title">
                    <h3>{props.title}</h3>
                </div>
                <div className="card-cart-section">
                    <h2>{props.price}€</h2>
                    <InertiaLink href={'cart/add/' + props.id} as='i' className="fa-solid fa-basket-shopping" color="white" />

                </div>
            </div>
        </div >
    )
}