import React from 'react'

export default function PromptResult(props) {

    console.log(props.rs);

    let className;
    if (props.rs === "Victory!") {
        className = "winner";
    } else if (props.rs === "Defeat!") {
        className = "loser";
    } else {
        className = "draw";
    }

    return (
        <h1 className={`${className}`}>{props.rs}</h1>
    )
}
