import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function NavLink(props) {
    //href={props.link}><li className="nav-link">{props.text}</li></a>

    return (
        props.method ?
            <Link
                className="nav-link"
                method={props.method}
                href={props.url}
                as='li'>
                {props.text}
            </Link>

            : <Link
                className="nav-link"
                href={props.url}
                as='li'>
                {props.text}
            </Link>

    )
}