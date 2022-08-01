import React from "react";
import Navbar from "@/Components/Navbar/Navbar";
import Button from "@/Components/Button";
import '../../css/index.scss';
import { usePage } from "@inertiajs/inertia-react";

export default function Dashboard() {
    const user = usePage().props.auth.user;

    return (
        <div id="content">
            <Navbar />
            <div id="main-content">
                <section>
                    <h1>{user.name} Dashboard</h1>
                    <Button text='Sell games' link='/dashboard/add' />
                    <Button text='Your listed games' link='/dashboard/listedgames' />
                </section>
            </div>
        </div>
    )
}