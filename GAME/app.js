let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");


const genCompChoice = () => {
       const options = ["rck","prr","scr"];
       const rdmIdx = Math.floor(Math.random() * 3);
       return options[rdmIdx];
    };

const drawGame = () => {
      // console.log("game was draw");
      msg.innerText = "Game Draw! Try again!";
      msg.style.backgroundColor = "pink";
      msg.style.color = "blue";
    };

const showWin = (userWin, userChoice, compChoice) => {
      if(userWin){
      userScore++;
      userScorePara.innerText = userScore;
      msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
      msg.style.color = "yellow";
      // console.log("You Win!");
      // msg.innerText = "You Win!";
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
        // console.log("You Lose!");
        // msg.innerText = "You Lose..";
        }
    }

const playGame = (userChoice) => {
       // console.log("userChoice = ", userChoice);
       // console.log("compChoice = ", compChoice);
       const compChoice = genCompChoice();
       if(userChoice === compChoice){
            // Draw Game
            drawGame();
        }
        else {
             let userWin = true;
             if(userChoice === "rck"){
             // scr, prr
             userWin = compChoice === "prr" ? false : true;
             }
              else if(userChoice === "prr"){
                // rck, scr
                userWin = compChoice === "scr" ? false : true;
                } else {
                    // rck, prr
                    userWin = compChoice === "rck" ? false : true;
                    }
                    showWin(userWin, userChoice, compChoice);
            }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked",userChoice);
    playGame(userChoice);
});
});