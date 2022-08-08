import React from "react";
import Navbar from "@/Components/Navbar/Navbar";
import Button from "@/Components/Button";
import Success from "@/Components/Alerts/Success";
import '../../css/index.scss';
import { usePage, InertiaLink } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";


export default function Dashboard() {
    const user = usePage().props.auth.user;
    const message = usePage().props.message
    const [userId, setUserId] = useState(user.id)

    console.log(user);


    const sendUserId = (e) => {
        e.preventDefault();
        Inertia.post('/dashboard/listedgames', { userId })
    }



    return (
        <div id="content">
            <Navbar />
            <div id="main-content">
                <section>
                    {message.success && (
                        <Success message={message.success} />
                    )}
                    <h1>{user.name} Dashboard</h1>
                    <Button text='Sell games' link='/dashboard/add' />
                    <InertiaLink onClick={sendUserId} as="button" href="/dashboard/listedgames" method="post">Your listed games</InertiaLink>
                    {user.role == 'admin' ? <InertiaLink as='button' href="/dashboard/admin/game/listall">All listed games</InertiaLink> : ''}
                    {user.role == 'admin' ? <InertiaLink as='button' href="/dashboard/admin/users/listall">All users</InertiaLink> : ''}
                </section>
            </div>
        </div>
    )
}