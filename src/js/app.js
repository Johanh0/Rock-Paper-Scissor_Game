// ---------- ROCK - PAPER - SCISSOR LOGIC ----------

// ---------- Const & Let ----------

// Buttons for play
const rockBtn = document.querySelector(`#rock`);
const paperBtn = document.querySelector(`#paper`);
const scissorBtn = document.querySelector(`#scissor`);
const playBtn = document.querySelector(`#play`);
const restartBtn = document.querySelector(`#restart`);

// Text Elements for change
const userPointEl = document.querySelector(`#userPoint`);
const cpuPointEl = document.querySelector(`#cpuPoint`);
const iconWinEl = document.querySelector(`#iconWin`);
const resultEl = document.querySelector(`#result`);

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

    // Adding class list for the button to know which one was selected
    rockBtn.classList.add(`btnSelected`);
    paperBtn.classList.remove(`btnSelected`);
    scissorBtn.classList.remove(`btnSelected`);
});

paperBtn.addEventListener(`click`, () => {
    userValue = gameValues[1];

    // Adding class list for the button to know which one was selected
    paperBtn.classList.add(`btnSelected`);
    rockBtn.classList.remove(`btnSelected`);
    scissorBtn.classList.remove(`btnSelected`);

});

scissorBtn.addEventListener(`click`, () => {
    userValue = gameValues[2];

    // Adding class list for the button to know which one was selected
    scissorBtn.classList.add(`btnSelected`);
    paperBtn.classList.remove(`btnSelected`);
    rockBtn.classList.remove(`btnSelected`);

});

//Restart Game
restartBtn.addEventListener(`click`, () => {

    resultEl.innerText = `Choose`;

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
            gameFunction(value);
            break;
        case `paper`:
            gameFunction(value);
            break;
        case `scissor`:
            gameFunction(value);
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

                // Showing to the user the result of the CPU
                alert(`CPU choose: ${cpuValue}`);
 
                // Making appear the result on the text
                timeForText(`Tie`);
               
            } else if (cpuValue === `paper`) {

                // Showing to the user the result of the CPU
                alert(`CPU choose: ${cpuValue}`);

                // Making appear the result on the text
                timeForText(`CPU won`);

                // Giving points to the cpu
                cpuPoints ++;
                cpuPointEl.innerText = cpuPoints;
                
            } else if (cpuValue === `scissor`) {
                
                // Showing to the user the result of the CPU
                alert(`CPU choose: ${cpuValue}`);

                // Making appear the result on the text
                timeForText(`USER won`);

                // Giving points to the cpu
                userPoints ++;
                // userPoints = userPoints.toString();
                userPointEl.innerText = userPoints;
                
            }

            break;
        case `paper`:

            if ( value === cpuValue) {

                // Showing to the user the result of the CPU
                alert(`CPU choose: ${cpuValue}`);

                // Making appear the result on the text
                timeForText(`Tie`);

            } else if (cpuValue === `scissor`) {

                // Showing to the user the result of the CPU
                alert(`CPU choose: ${cpuValue}`);

                // Making appear the result on the text
                timeForText(`CPU won`);

                // Giving points to the cpu
                cpuPoints ++;
                cpuPointEl.innerText = cpuPoints;
                
            } else if (cpuValue === `rock`) {
                
                // Showing to the user the result of the CPU
                alert(`CPU choose: ${cpuValue}`);

                // Making appear the result on the text
                timeForText(`USER won`);

                // Giving points to the cpu
                userPoints ++;
                // userPoints = userPoints.toString();
                userPointEl.innerText = userPoints;

            }

            break;
        case `scissor`:

            if ( value === cpuValue) {

                // Showing to the user the result of the CPU
                alert(`CPU choose: ${cpuValue}`);
 
                // Making appear the result on the text
                timeForText(`Tie`);
               
            } else if (cpuValue === `rock`) {

                // Showing to the user the result of the CPU
                alert(`CPU choose: ${cpuValue}`);

                // Making appear the result on the text
                timeForText(`CPU won`);

                // Giving points to the cpu
                cpuPoints ++;
                cpuPointEl.innerText = cpuPoints;
                
            } else if (cpuValue === `paper`) {
                
                // Showing to the user the result of the CPU
                alert(`CPU choose: ${cpuValue}`);

                // Making appear the result on the text
                timeForText(`USER won`);

                // Giving points to the cpu
                userPoints ++;
                // userPoints = userPoints.toString();
                userPointEl.innerText = userPoints;
                
            }

            break;
    }

    // Check if the logic works from the console
    console.log(`cpu`, cpuValue);
    console.log(value);

    //Restart values
    userValue = undefined;
    cpuValue = undefined;
    paperBtn.classList.remove(`btnSelected`);
    rockBtn.classList.remove(`btnSelected`);
    scissorBtn.classList.remove(`btnSelected`);
}

function timeForText(textResult) {
    // Tiem Out for the text to let know what happened in the game

    resultEl.innerText = `The result of the match is: ${textResult}`;
    setTimeout(() => {
        resultEl.innerText = `Choose`;
    }, 7000);

}


