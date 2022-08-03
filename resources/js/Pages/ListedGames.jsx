import React from 'react'
import Navbar from '@/Components/Navbar/Navbar'
import '../../css/index.scss';
import { usePage, InertiaLink } from '@inertiajs/inertia-react';
import Input from '@/Components/Input';
import '../../css/listedgames.scss';
import { Inertia } from '@inertiajs/inertia';

const ListedGames = () => {
    const action = 'edit';
    const games = usePage().props.games
    const editGame = (id) => {
        // Inertia.post('/dashboard/edit', { id, action })
    }
    return (
        <div id='content'>
            <Navbar />
            <div id='main-content'>
                <section>
                    <h1>Your listed games</h1>
                </section>
                <section>

                    <table className='table-auto'>
                        <thead>
                            <tr>
                                <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'><Input type='checkbox' /></th>
                                <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Title</th>
                                <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Key</th>
                                <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Price</th>
                                <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Quantity</th>
                                <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Action</th>
                            </tr>
                        </thead>
                        {
                            games ?
                                <tbody className='bg-white dark:bg-slate-800'>
                                    {games.map(({ id, title, key, price, quantity }) => {
                                        return (
                                            <tr key={id}>
                                                <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'><Input type='checkbox' /></td>
                                                <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{title}</td>
                                                <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{key}</td>
                                                <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{price}</td>
                                                <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{quantity}</td>

                                                <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>
                                                    <InertiaLink href={'/dashboard/edit/' + id} as='button'>Edit</InertiaLink>
                                                    <InertiaLink href={'delete/' + id} as='button'>Delete</InertiaLink>
                                                </td>

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