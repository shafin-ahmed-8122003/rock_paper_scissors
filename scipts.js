let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorsBtn = document.getElementById("scissorsBtn");

function getPcTurn() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    switch (randomNumber) {
        case 1:
            pcChoice = "🪨";
            break;
        case 2:
            pcChoice = "📜";
            break;
        case 3:
            pcChoice = "✂️";
            break;
    }

    switch (pcChoice) {
        case "🪨":
            pcChoiceElement.innerHTML = "<label>PC</label><p>🪨</p>";
            break;
        case "📜":
            pcChoiceElement.innerHTML = "<label>PC</label><p>📜</p>";
            break;
        case "✂️":
            pcChoiceElement.innerHTML = "<label>PC</label><p>✂️</p>";
            break;
    }
}

function findWinner() {
    console.log(`PC: ${pcChoice}`);
    console.log(`User: ${userChoice}`);

    if (userChoice == pcChoice) {
        result.innerText = "Draw";
    } else if (userChoice == "📜" && pcChoice == "✂️") {
        result.innerText = "PC win";
    } else if (userChoice == "📜" && pcChoice == "🪨") {
        result.innerText = "You win";
    } else if (userChoice == "🪨" && pcChoice == "✂️") {
        result.innerText = "You win";
    } else if (userChoice == "🪨" && pcChoice == "📜") {
        result.innerText = "PC win";
    } else if (userChoice == "✂️" && pcChoice == "📜") {
        result.innerText = "You win";
    } else if (userChoice == "✂️" && pcChoice == "🪨") {
        result.innerText = "PC win";
    }
}

let userChoice = "";
let pcChoice = "";
let userChoiceElement = document.getElementById("user");
let pcChoiceElement = document.getElementById("pc");
let result = document.getElementById("result");

rockBtn.addEventListener("click", () => {
    userChoice = "🪨";
    userChoiceElement.innerHTML = "<label>USER</label><p>🪨</p>";
    getPcTurn();
    findWinner();
});
paperBtn.addEventListener("click", () => {
    userChoice = "📜";
    userChoiceElement.innerHTML = "<label>USER</label><p>📜</p>";
    getPcTurn();
    findWinner();
});
scissorsBtn.addEventListener("click", () => {
    userChoice = "✂️";
    userChoiceElement.innerHTML = "<label>USER</label><p>✂️</p>";
    getPcTurn();
    findWinner();
});

document.addEventListener("click", function (event) {
    let elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
    }
});
