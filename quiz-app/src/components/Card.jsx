import React from "react";

const Card = (props) => {
    return (
        <div id={props.id}>
            {props.children}
        </div>
    );
};

export default Card;