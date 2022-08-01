import React from 'react'
import Navbar from '@/Components/Navbar/Navbar'
import '../../css/index.scss';
import { usePage } from '@inertiajs/inertia-react';
import Input from '@/Components/Input';

const ListedGames = () => {

    const games = usePage().props.games
    console.log(games);
    return (
        <div id='content'>
            <Navbar />
            <div id='main-content'>
                <section>
                    <h1>Your listed games</h1>
                </section>
                <section>

                    <table>
                        <thead>
                            <tr>
                                <td>
                                    <Input type='checkbox' />
                                </td>
                                <td>Title</td>
                                <td>Key</td>
                                <td>Price</td>
                                <td>Quantity</td>
                            </tr>
                        </thead>
                        {
                            games ?
                                <tbody>
                                    {games.map(({ id, title, key, price, quantity }) => {
                                        return (
                                            <tr key={id}>
                                                <td><Input type='checkbox' /></td>
                                                <td>{title}</td>
                                                <td>{key}</td>
                                                <td>{price}</td>
                                                <td>{quantity}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                                : <span>Loading...</span>
                        }

                    </table>


                </section>

            </div>
        </div>
    )
}

export default ListedGames