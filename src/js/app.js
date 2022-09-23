// ---------- ROCK - PAPER - SCISSOR LOGIC ----------

// Buttons for play
const rockBtn = document.querySelector(`#rock`);
const paperBtn = document.querySelector(`#paper`);
const scissorBtn = document.querySelector(`#scissor`);
const playBtn = document.querySelector(`#play`);
const restartBtn = document.querySelector(`#restart`);


// Game Properities
let userPoints = 0;
let cpuPoints = 0;

const userPointsElement = document.querySelector(`#userPoint`);
const cpuPointElement = document.querySelector(`#cpuPoint`);

const gameValues = {
    rock: false,
    paper: false,
    scissor: false
};

// CPU CallBack
var cpu = () => {
    
    let cpuRandom = Math.floor((Math.random() * (3 - 0 )) + 0);

    return cpuRandom;
}

// Events Listeners



// Functions

function changeValue () {
     (cpu[Math.floor(Math.random() * cpu.length)]);
}


// Restart the game from 0
function restart(){
    userPointsElement.innerHTML = "0"; 
    cpuPointElement.innerHTML = "0";
    userPoint = 0;
    cpuPoint = 0;
}
