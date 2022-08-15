import React from 'react'
import '../../css/index.scss'
import Navbar from '@/Components/Navbar/Navbar'
import { usePage } from '@inertiajs/inertia-react'
import '../../css/showGame.scss';
import { Inertia } from '@inertiajs/inertia';


const ShowGame = () => {
    const game = usePage().props.game;
    const user = usePage().props.auth.user;
    const handleClick = () => {
        Inertia.post(route('add.item'), { 'gameId': game.id, 'quantity': 1, 'unitPrice': game.price, 'key': game.key, 'stock': game.stock });
    }; return (
        <div id='content'>
            <Navbar />
            <div id='main-content'>
                <section>
                    <h1>{game.title}</h1>
                </section>

                <section>
                    <div className='game-info-container'>
                        <div className='show-game-img'>
                            <img src={game.image_link} alt="game-image" />
                        </div>
                        <div className='show-game-desc'>
                            <h2>Description</h2>
                            <span>{game.description}</span>
                            <br />
                            <br />
                            {
                                user ? <button onClick={handleClick}>Add to cart</button>
                                    : ''
                            }
                        </div>
                    </div>
                </section>


            </div>
        </div>
    )
}

export default ShowGame