let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randInd = Math.floor(Math.random() * 3);
    return options[randInd];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        console.log("you WIN");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You WIN!!  Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("you LOSE");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You LOSE!! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
    drawGame(userChoice);
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const drawGame = (userChoice) => {
    msg.innerText = `Game was Draw.Play Again!! You and comp choose ${userChoice}`;
    msg.style.backgroundColor = "#376da8";
};