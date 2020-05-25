import React, { useState } from 'react';
import './App.css';

import PromptResult from "./components/PromptResult";
import ChoiceCard from "./components/ChoiceCard";
import ChoiceButtons from "./components/ChoiceButtons";
import { CHOICES, getRoundOutcome } from "./utils/index";

let isReady = false;
let flawless = 0;

function App() {

  const [prompt, setGamePrompt] = useState("1, 2, 3, SHOOT!");
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [previousWinner, setPreviousWinner] = useState(null);
  const [flawlessWinner, setFlawlessWiner] = useState(null);
  const [gameHistory, setGameHistory] = useState([]);

  const onPlayerChoose = playerChoice => {
    if (!isReady) return;

    const [result, compChoice] = getRoundOutcome(playerChoice);
    const newUserChoice = CHOICES[playerChoice];
    const newComputerChoice = CHOICES[compChoice];
    setPlayerChoice(newUserChoice);
    setComputerChoice(newComputerChoice);

    if (result === "Victory!") {
      setPreviousWinner("You");
      // positive
      if (flawless < 0) flawless = 1;
      else flawless += 1;

      if (flawless > 2) setFlawlessWiner("You");

    } else if (result === "Defeat!") {
      setPreviousWinner("Computer");
      // negative
      if (flawless > 0) flawless = -1;
      else flawless -= 1;

      if (flawless < -2) setFlawlessWiner("Computer");

    } else {
      setPreviousWinner("Tie");
      // 0
      flawless = 0;
    }

    gameHistory.push(result);

    setGamePrompt(result);
    setGameHistory(gameHistory);
  };

  const onPlayerRegister = () => {
    if (!isReady) {
      isReady = true;
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-8 themed-grid-col">

            <ChoiceCard
              title="Computer"
              previousWinner={previousWinner}
              imgURL={computerChoice && computerChoice.url}
            />

            <PromptResult rs={prompt} />
            <ChoiceButtons onPlayerChoose={onPlayerChoose} />

            <ChoiceCard
              title="You"
              previousWinner={previousWinner}
              imgURL={playerChoice && playerChoice.url}
            />
          </div>

          <div className="col-md-4 themed-grid-col">
            <h2>RPS</h2>
            <div>
              <button
                className="btn btn-success btn-lg"
                onClick={() => onPlayerRegister()}
              >
                Start
              </button>
            </div>

            <h2>Flawless Winner: {flawlessWinner}</h2>
            <h3>History</h3>
            <ul>
              {gameHistory.map(h => {
                return <li>{h}</li>;
              })}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
