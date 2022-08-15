import React from "react";
import SearchBar from "@/Components/GameList/SearchBar";
import Game from "@/Components/GameList/Game";
import Success from "@/Components/Alerts/Success";
import Error from "@/Components/Alerts/Error";
import '../../css/gamelist.scss'
import { usePage } from "@inertiajs/inertia-react";
import { useState } from "react";

export default function GameList() {
    const games = usePage().props.games;
    const message = usePage().props.message
    console.log(games);

    const [options, setOptions] = useState([]);
    const onInputChange = (event) => {
        console.log(event.target.value);
        setOptions(
            games.filter((option) => option.title.includes(event.target.value))
        );
    };

    const defaultOptions = [];
    for (let i = 0; i < 10; i++) {
        defaultOptions.push(`option ${i}`);
        defaultOptions.push(`suggesstion ${i}`);
        defaultOptions.push(`advice ${i}`);
    }



    return (
        <div id="main-content">
            <header>
                {message.success && message.success != null ? <Success message={message.success} /> : ''}
                {message.error && message.error != null ? <Error message={message.error} /> : ''}
                <SearchBar options={options} onInputChange={onInputChange} />
            </header>

            <section>
                <h1>Games</h1>
                <div className="games-container">


                    {
                        games.map(game => {
                            return (
                                <Game key={game.id} title={game.title} price={game.price} img={game.image_link} id={game.id} cd_key={game.key} stock={game.stock} />
                            )
                        })
                    }




                </div>
            </section>



        </div>
    )
}