
export const CHOICES = {
    scissors: {
        name: "scissors",
        url: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
    },
    paper: {
        name: "paper",
        url: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png"
    },
    rock: {
        name: "rock",
        url:
            "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png"
    }
};

export const getRandomChoice = () => {
    let choiceNames = Object.keys(CHOICES); // returns an array of the keys, so: ['scissors', 'paper', 'rock']
    let randomIndex = Math.floor(Math.random() * 3); // either 0, 1, or 2
    let choiceName = choiceNames[randomIndex];
    return CHOICES[choiceName];
};

export const getRoundOutcome = userChoice => {
    const computerChoice = getRandomChoice().name;
    let result;

    if (userChoice === "rock") {
        result = computerChoice === "scissors" ? "Victory!" : "Defeat!";
    }
    if (userChoice === "paper") {
        result = computerChoice === "rock" ? "Victory!" : "Defeat!";
    }
    if (userChoice === "scissors") {
        result = computerChoice === "paper" ? "Victory!" : "Defeat!";
    }

    if (userChoice === computerChoice) result = "Tie game!";
    return [result, computerChoice];
};
