import React from "react";
import './Card.css';


function Card(props) {
    let classes = 'card';
    classes += props.className ? ` ${props.className}` : '';

    return (<div className={classes}>{props.children}</div>);
}

export default Card;