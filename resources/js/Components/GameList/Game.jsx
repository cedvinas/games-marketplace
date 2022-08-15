import React from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Game(props) {
    const user = usePage().props.auth.user;

    const handleClick = () => {
        Inertia.post(route('add.item'), { 'gameId': props.id, 'quantity': 1, 'unitPrice': props.price, 'key': props.cd_key, 'stock': props.stock });
    };

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
                    {
                        user ? <i onClick={handleClick} className="fa-solid fa-basket-shopping"></i> : ''
                    }


                </div>
            </div>
        </div>
    )
}