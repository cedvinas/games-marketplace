import React from 'react'
import Navbar from '@/Components/Navbar/Navbar'
import '../../css/index.scss';
import { usePage } from '@inertiajs/inertia-react';

const OrderHistory = () => {

    const orders = usePage().props.orders;

    const getGameKey = (e, id) => {
        printKey(e.target.value, id);
    }

    const printKey = (key, id) => {
        document.getElementById(id).innerHTML = key;
    }

    return (
        <div id='content'>
            <Navbar />
            <div id='main-content'>
                <section>
                    <h1>Order history</h1>
                </section>
                <section>
                    <table className='table-auto'>
                        <thead>
                            <tr>

                                <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Order id</th>
                                <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Games</th>
                                <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Amount</th>
                                <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Total</th>
                                <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Key</th>
                            </tr>
                        </thead>
                        {
                            orders ?
                                <tbody className='bg-white dark:bg-slate-800'>
                                    {orders.map((order) => {
                                        return (
                                            <tr key={order.id}>

                                                <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{order.id}</td>
                                                <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>
                                                    <select onChange={(e) => getGameKey(e, order.id)} name="games" id="games">
                                                        {order.games.map((game) => {
                                                            return (
                                                                <option value={game.key}>{game.title}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </td>
                                                <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>amount</td>
                                                <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{order.total}</td>
                                                <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>
                                                    <span id={order.id}></span>
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

export default OrderHistory