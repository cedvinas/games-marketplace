import React from 'react';
import '../../css/Button.scss';

export default function Button(props) {
    return (
        props.link ? <a href={props.link}><button>{props.text}</button></a>
            : props.type & props.text ? <button type={props.type}>{props.text}</button>
                : <button>{props.text}</button>
    );
}
