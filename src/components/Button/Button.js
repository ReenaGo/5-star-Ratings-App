import React from 'react';
import './Button.css'

export default function Button(props) {
    return (
    <button className = {props.buttonType} onClick={props.clicked}>{props.children}</button>
    )
}
