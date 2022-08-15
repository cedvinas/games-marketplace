import React from 'react'
import '../../../css/index.scss';
import Navbar from '@/Components/Navbar/Navbar';
import { usePage, InertiaLink } from '@inertiajs/inertia-react';

const AllGames = () => {

    const games = usePage().props.games;
    return (
        <div id='content'>
            <Navbar />
            <div id='main-content'>
                <section>
                    <h1>All listed games</h1>
                </section>

                <section>
                    <table className='table-auto'>
                        <thead>
                            <tr>
                                <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>User_ID</th>
                                <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Title</th>
                                <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Key</th>
                                <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Price</th>
                                <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Action</th>
                            </tr>
                        </thead>
                        {
                            games ?
                                <tbody className='bg-white dark:bg-slate-800'>
                                    {games.map(({ id, title, key, price, user_id }) => {
                                        return (
                                            <tr key={id}>
                                                <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{user_id}</td>
                                                <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{title}</td>
                                                <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{key}</td>
                                                <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{price}</td>

                                                <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>
                                                    <InertiaLink href={'/dashboard/admin/game/delete/' + id} as='button'>Delete</InertiaLink>
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

export default AllGames