import React from 'react'
import '../../css/index.scss'
import Navbar from '@/Components/Navbar/Navbar'
import { usePage } from '@inertiajs/inertia-react'
import '../../css/showGame.scss';

const ShowGame = () => {
    const game = usePage().props.game;
    console.log(game);
    return (
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
                        </div>
                    </div>
                </section>


            </div>
        </div>
    )
}

export default ShowGame