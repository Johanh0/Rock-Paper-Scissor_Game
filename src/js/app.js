// ---------- ROCK - PAPER - SCISSOR LOGIC ----------

// ---------- Const & Let ----------

// Buttons for play
const rockBtn = document.querySelector(`#rock`);
const paperBtn = document.querySelector(`#paper`);
const scissorBtn = document.querySelector(`#scissor`);
const playBtn = document.querySelector(`#play`);
const restartBtn = document.querySelector(`#restart`);


// Game Properities
let userPoints = 0;
let cpuPoints = 0;

//CPU Random Value & USER Value
let cpuRandom = () => {
    let cpuResult = Math.floor(Math.random() * 3);
    return cpuResult;
}

let userValue;
let cpuValue;

// Points
const userPointsElement = document.querySelector(`#userPoint`);
const cpuPointElement = document.querySelector(`#cpuPoint`);


// Game values for the game
const gameValues = [`rock`, `paper`, `scissor`]


// ---------- Events Listeners ----------

playBtn.addEventListener(`click`, () => {
    
    if (userValue === undefined) {
        alert(`You have to choose one value`)
    } else {
        gameLogic(userValue);
    }

})

rockBtn.addEventListener(`click`, () => {
    userValue = gameValues[0];
});

paperBtn.addEventListener(`click`, () => {
    userValue = gameValues[1];
});

scissorBtn.addEventListener(`click`, () => {
    userValue = gameValues[2];
});

//Restart Game
restartBtn.addEventListener(`click`, () => {
    userPointsElement.innerHTML = "0"; 
    cpuPointElement.innerHTML = "0";
    userPoint = 0;
    cpuPoint = 0;
});

// ---------- Functions ----------

// Logic Game for choose the value of the user
function gameLogic(value) {

    // Switch for to know whitch value the player choosed
    switch( value ) {
        case `rock`:
            playBtn.addEventListener(`click`, () => gameFunction(value));
            break;
        case `paper`:
            playBtn.addEventListener(`click`, () => gameFunction(value));
            break;
        case `scissor`:
            playBtn.addEventListener(`click`, () => gameFunction(value));
            break;
    }
};



// Game function for compare both results and give the points
function gameFunction (value) {

    // Invoke the CallBack for get the random CPU value
    cpuValue = cpuRandom();

    // Transfor the random number in one value for the game
    cpuValue = gameValues[cpuValue];

    switch( value ) {
        case `rock`:

            if ( value === cpuValue) {
                alert(`It's a tie`);
            } else if (cpuValue === `paper`) {
                alert(`CPU won with Paper`);
            } else if (cpuValue === `scissor`) {
                alert(`USER won with rock`)
            }

            break;
        case `paper`:

            if ( value === cpuValue) {
                alert(`It's a tie`);
            } else if (cpuValue === `scissor`) {
                alert(`CPU won with Scissor`);
            } else if (cpuValue === `rock`) {
                alert(`USER won with ${value}`)
            }

            break;
        case `scissor`:

            if ( value === cpuValue) {
                alert(`It's a tie`);
            } else if (cpuValue === `rock`) {
                alert(`CPU won with Rock`);
            } else if (cpuValue === `paper`) {
                alert(`USER won with ${value}`)
            }

            break;
    }


    // Check if the logic works from the console
    console.log(`cpu`, cpuValue);
    console.log(value);
}


