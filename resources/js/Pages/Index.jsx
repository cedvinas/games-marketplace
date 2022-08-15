import React from "react";
import Navbar from "@/Components/Navbar/Navbar";
import GameList from "./GameList";
import '../../css/index.scss'


export default function Index() {



    return (
        <div id="content">
            <Navbar />
            <GameList />
        </div>
    )
}