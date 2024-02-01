const ruleBtn = document.querySelector(".rule-btn");
const closeBtn = document.querySelector(".close-btn");
const ruleBook =document.querySelector(".ruleBook");
ruleBtn.addEventListener("click" , ()=>{
    ruleBook.classList.remove("show-rulebook") ;
});
closeBtn.addEventListener("click" , ()=>{
    ruleBook.classList.add('show-rulebook') ;
});



const youPciked =document.querySelector(".you-picked");
const pcPicked = document.querySelector(".pc-picked");
const gameArea = document.querySelector(".gameArea");
const result = document.querySelector(".result");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");


let userChoice;
let computerChoice;

let userScore = localStorage.getItem("userScore") || 0;
let pcScore = localStorage.getItem("pcScore") || 0 ;

const whoWins = document.querySelector(".who-wins");
const replayBtn= document.querySelector(".replay-btn");
const userScoreValue = document.querySelector(".userScore");
const pcScoreValue = document.querySelector(".pcScore");
const against =document.querySelector(".against-pc");
const next = document.querySelector(".next-btn");
const header= document.querySelector(".header");
const celebration= document.querySelector(".celebration");
const playagain = document.querySelector(".playagain-btn");

userScoreValue.textContent = userScore;
pcScoreValue.textContent = pcScore;


rock.addEventListener("click", () => {
    userChoice = "rock";
    youPciked.innerHTML=`
        <div class="choice ${userChoice}">
        <img src="./img/${userChoice}.png" alt="${userChoice}"/>
        </div>
        `;
    computerChoice = pcSelect();
    pcPicked.innerHTML=`
                <div class="choice ${computerChoice}">
         <img src="./img/${computerChoice}.png" alt="${computerChoice}"/>
        </div>
        `;
    gameArea.style.display = "none";
    result.style.display="flex";
    if (userChoice === "rock" && computerChoice === "scissors") {
      userWins();
    } else if (userChoice === computerChoice) {
      tieUp();
    } else {
      computerWins();
    }
});


scissors.addEventListener("click", () => {
    userChoice = "scissors";
    youPciked.innerHTML=`
        <div class="choice ${userChoice}">
        <img src="./img/scissors.png" alt="scissors">
        </div>
        `;
    computerChoice = pcSelect();
    pcPicked.innerHTML=`
        <div class="choice ${computerChoice}">
         <img src="./img/${computerChoice}.png" alt="${computerChoice}"/>
        </div>
        `;
    gameArea.style.display = "none";
    result.style.display="flex";
    if (userChoice === "scissors" && computerChoice === "paper") {
      userWins();
    } else if (userChoice === computerChoice) {
      tieUp();
    } else {
      computerWins();
    }
});



paper.addEventListener("click", () => {
    userChoice = "paper";
    youPciked.innerHTML=`
        <div class="choice ${userChoice}">
         <img src="./img/${userChoice}.png" alt="${userChoice}"/>
        </div>
        `;
    computerChoice = pcSelect();
    pcPicked.innerHTML=`
        <div class="choice ${computerChoice}">
         <img src="./img/${computerChoice}.png" alt="${computerChoice}"/>
        </div>
        `;
    gameArea.style.display = "none";
    result.style.display="flex";
    if (userChoice === "paper" && computerChoice === "rock") {
      userWins();
    } else if (userChoice === computerChoice) {
      tieUp();
    } else {
      computerWins();
    }
});

const  pcSelect= () => {
    const arrayChoices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * arrayChoices.length);
    return arrayChoices[random];
};


const userWins = () => {
  userScore++;
  localStorage.setItem("userScore", `${userScore}`);
  userScoreValue.textContent = userScore;
  against.textContent="AGAINST PC";
  whoWins.textContent = "YOU WIN";
  replayBtn.textContent = "PLAY AGAIN";
  next.style.display="block";
  youPciked.classList.add("pulse") ;
}

const tieUp = () => {
  whoWins.textContent = "TIE UP";
  against.textContent="";
  replayBtn.textContent = "REPLAY";
  next.style.display="none";
} 
const computerWins = () => {
  pcScore++;
  localStorage.setItem("pcScore", `${pcScore}`);
  pcScoreValue.textContent = pcScore;
  whoWins.textContent = "YOU LOST";
  replayBtn.textContent = "PLAY AGAIN";
  against.textContent="AGAINST PC";
  next.style.display="none";
  pcPicked.classList.add("pulse") ;
}


replayBtn.addEventListener("click", ()=>{
  gameArea.style.display = "grid";
  result.style.display="none";
  next.style.display="none";
  youPciked.classList.remove("pulse") ;
  pcPicked.classList.remove("pulse") ;
});


next.addEventListener("click",()=>{
  console.log("hii ashish");
  gameArea.style.display = "none";
  result.style.display="none";
  next.style.display="none";
  header.style.display="none";
  celebration.style.display="flex"
});

playagain.addEventListener("click",()=>{
  console.log("hii ashish");
  gameArea.style.display = "grid";
  result.style.display="none";
  next.style.display="none";
  header.style.display="flex";
  celebration.style.display="none"
  youPciked.classList.remove("pulse") ;
  pcPicked.classList.remove("pulse") ;
});

