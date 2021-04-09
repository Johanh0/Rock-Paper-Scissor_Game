const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
})

const btnRock = document.querySelector('#rock');

btnRock.addEventListener('click', () => {
    document.body.classList.toggle('press1');
})

const btnPaper = document.querySelector('#paper');

btnPaper.addEventListener('click', () => {
    document.body.classList.toggle('press2');
})

const btnScissor = document.querySelector('#scissor');

btnScissor.addEventListener('click', () => {
    document.body.classList.toggle('press3');
})
// ---------- ROCK - PAPER - SCISSOR LOGIC ----------


function rockLogic(){
    rock = true;
    paper = false;
    scissor = false;
}

function paperLogic(){
    paper = true;
    rock = false;
    scissor = false;
}

function scissorLogic(){
    scissor = true;
    rock = false;
    paper = false;
}

function changeValue () {
     (cpu[Math.floor(Math.random() * cpu.length)]);
}

function play(){
    
    if (rock == true && cpuRandom === "Scissor"){

        alert("The CPU Choose " + cpuRandom);
        userPoint++;
        document.getElementById('userPoint').innerHTML = userPoint;
        document.getElementById('result').innerHTML = "The USER Win With The Rock!";
        document.getElementById('iconWin').innerHTML = "✊";
        changeValue();

    }else if (cpuRandom === "Paper" && rock == true){

        alert("The CPU Choose " + cpuRandom);
        cpuPoint++;
        document.getElementById('cpuPoint').innerHTML = cpuPoint;
        document.getElementById('result').innerHTML = "The CPU Win With The Paper!";
        document.getElementById('iconWin').innerHTML = "👋";
        changeValue();

    }else if (cpuRandom === "Rock" && rock == true){
        
        alert("The CPU Choose " + cpuRandom);
        document.getElementById('cpuPoint').innerHTML = cpuPoint;
        document.getElementById('result').innerHTML = "It's A Tie!";
        document.getElementById('iconWin').innerHTML = "🤝";
        changeValue();
    } else if (paper == true && cpuRandom === "Rock"){

        alert("The CPU Choose " + cpuRandom);
        userPoint++;
        document.getElementById('userPoint').innerHTML = userPoint;
        document.getElementById('result').innerHTML = "The USER Win With The Paper!";
        document.getElementById('iconWin').innerHTML = "👋";

    }else if (cpuRandom === "Scissor" && paper == true){

        alert("The CPU Choose " + cpuRandom);
        cpuPoint++;
        document.getElementById('cpuPoint').innerHTML = cpuPoint;
        document.getElementById('result').innerHTML = "The CPU Win With The Scissor!";
        document.getElementById('iconWin').innerHTML = "✌️";
        changeValue();

    }else if (cpuRandom === "Paper" && paper == true){
        
        alert("The CPU Choose " + cpuRandom);
        document.getElementById('cpuPoint').innerHTML = cpuPoint;
        document.getElementById('result').innerHTML = "It's A Tie!";
        document.getElementById('iconWin').innerHTML = "🤝";
        changeValue();

    }else if (scissor == true && cpuRandom === "Paper"){

        alert("The CPU Choose " + cpuRandom);
        userPoint++;
        document.getElementById('userPoint').innerHTML = userPoint;
        document.getElementById('result').innerHTML = "The USER Win With The Scissor!";
        document.getElementById('iconWin').innerHTML = "✌️";

    }else if (cpuRandom === "Rock" && scissor == true){

        alert("The CPU Choose " + cpuRandom);
        cpuPoint++;
        document.getElementById('cpuPoint').innerHTML = cpuPoint;
        document.getElementById('result').innerHTML = "The CPU Win With The Rock!";
        document.getElementById('iconWin').innerHTML = "✊";
        changeValue();

    }else if (cpuRandom === "Scissor" && scissor == true){
        
        alert("The CPU Choose " + cpuRandom);
        document.getElementById('cpuPoint').innerHTML = cpuPoint;
        document.getElementById('result').innerHTML = "It's A Tie!";
        document.getElementById('iconWin').innerHTML = "🤝";
        changeValue();
    }
}

function restart(){
    document.getElementById('userPoint').innerHTML = "0"; 
    document.getElementById('cpuPoint').innerHTML = "0";
    userPoint = 0;
    cpuPoint = 0;
}

play();

var rock;
var paper;
var scissor;
var userPoint = 0;
var cpuPoint = 0;

var cpu = ["Rock" , "Paper" , "Scissor"];
var cpuRandom = (cpu[Math.floor(Math.random() * cpu.length)]);

document.getElementById('rock').addEventListener("click", rockLogic);
document.getElementById('paper').addEventListener("click", paperLogic);
document.getElementById('scissor').addEventListener("click", scissorLogic);
document.getElementById('restart').addEventListener("click", restart);

document.getElementById('play').addEventListener("click", play);
