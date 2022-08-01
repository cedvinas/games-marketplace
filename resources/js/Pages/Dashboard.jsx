import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import '../../css/dashboard.scss';
export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >

            <a href="game.create"><button>List a game</button></a>
        </Authenticated>
    );
}
