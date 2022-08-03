import React from "react";
import SearchBar from "@/Components/GameList/SearchBar";
import Game from "@/Components/GameList/Game";
import Success from "@/Components/Alerts/Success";
import Error from "@/Components/Alerts/Error";
import '../../css/gamelist.scss'
import { usePage } from "@inertiajs/inertia-react";

export default function GameList() {
    const games = usePage().props.games;
    const message = usePage().props.message
    console.log(games);


    const img = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/228541e0-60ef-4add-b43f-99c4c67d2af9/d5vdqg1-a36f1e3e-eae3-49ae-bd01-59cef987484f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIyODU0MWUwLTYwZWYtNGFkZC1iNDNmLTk5YzRjNjdkMmFmOVwvZDV2ZHFnMS1hMzZmMWUzZS1lYWUzLTQ5YWUtYmQwMS01OWNlZjk4NzQ4NGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4b4K4JvUnOeQYwnIUL2Abu6hJ2iUU7F3QSKux84NdQg';
    return (
        <div id="main-content">
            <header>
                {message.success && message.success != null ? <Success message={message.success} /> : ''}
                {message.error && message.error != null ? <Error message={message.error} /> : ''}
                <SearchBar />
            </header>

            <section>
                <h1>Games</h1>
                <div className="games-container">


                    {
                        games.map(game => {
                            return (
                                <Game key={game.id} title={game.title} price={game.price} img={game.image_link} />
                            )
                        })
                    }




                </div>
            </section>



        </div>
    )
}