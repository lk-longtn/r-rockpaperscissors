import React from 'react'

export default function ChoiceButtons(props) {
    return (
        <div className="container">
            <button
                className="btn btn-success btn-lg"
                onClick={() => props.onPlayerChoose("rock")}
            >
                Rock
            </button>
            <button
                className="btn btn-success btn-lg"
                onClick={() => props.onPlayerChoose("paper")}
            >
                Paper
            </button>
            <button
                className="btn btn-success btn-lg"
                onClick={() => props.onPlayerChoose("scissors")}
            >
                Scissors
            </button>
        </div>
    )
}
