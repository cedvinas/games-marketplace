import React from 'react'
import Navbar from '@/Components/Navbar/Navbar'
import '../../../css/index.scss';
import { usePage, InertiaLink } from '@inertiajs/inertia-react';

const AllUsers = () => {

    const users = usePage().props.users;

    console.log(users);
    return (
        <div id='content'>
            <Navbar />
            <div id='main-content'>
                <section>
                    <h1>Registered users</h1>
                </section>

                <section>
                    <table className='table-auto'>
                        <thead>
                            <tr>
                                <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>ID</th>
                                <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Name</th>
                                <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>E-mail</th>
                                <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Role</th>
                                <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Action</th>
                            </tr>
                        </thead>
                        {
                            users ?
                                <tbody className='bg-white dark:bg-slate-800'>
                                    {users.map(({ id, name, email, role }) => {
                                        return (
                                            <tr key={id}>
                                                <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{id}</td>
                                                <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{name}</td>
                                                <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{email}</td>
                                                <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{role}</td>

                                                <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>
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

export default AllUsers