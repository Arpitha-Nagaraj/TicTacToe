let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#comp-score");




const playGame = (userChoice)=>{
   console.log("user choice", userChoice);
   const compChoice = genCompChoice();
    console.log("comp choice", compChoice);

    if(userChoice === compChoice){
        draw();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }else{
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    };
    
};

const draw = () =>{
    console.log("Game was draw");
    msg.innerText = "Game draw";
    msg.style.backgroundColor = "#081b31";
};

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        user_score.innerText = userScore;
        msg.innerText = `You won! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        
    }else{
        compScore++;
        comp_score.innerText = compScore;
        msg.innerText =`You lost!  ${compChoice} beats your ${userChoice}  `;
        msg.style.backgroundColor = "red";
    }
};


const genCompChoice=()=>{
    const options = ["Rock", "paper", "scissor"];
    const choiceIdx = Math.floor(Math.random(0)*3);
    return options[choiceIdx];
}

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});