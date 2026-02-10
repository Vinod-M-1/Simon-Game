let started = false;
let gameSeq = [];
let userseq = [];

let level = 0;
let highestLevel = 0;
let btns = ['yellow', 'red', 'purple', 'green']


let h2 = document.querySelector('.h2');
let score = document.querySelector('.score');
let main= document.querySelector('.main-body');

let allBtns = document.querySelectorAll('.btn')
for(btn of allBtns){
    btn.addEventListener('click', btnPress);
}


document.addEventListener('keypress', function(){
    if(started == false){
        levelUp();
        started = true;
    }
});



function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(function () {
        btn.classList.remove('flash')
    }, 500);
}


function levelUp(){
    userseq = [];   
    level++;
    h2.innerText = `Level ${level}`;
    

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    gameSeq.push(randColor);
    console.log(gameSeq);               //Hint
    let randbtn= document.querySelector('.' + randColor);
    gameFlash(randbtn);
}


function btnPress(){
    let btn = this;
    let userColor = btn.getAttribute('id');
    userseq.push(userColor);
    checkAns(userseq.length-1);
}


function checkAns(idx){
    if(userseq[idx] == gameSeq[idx]){
        if(userseq.length == gameSeq.length){
            setTimeout(levelUp,700);
        }
    }else{
        if(level-1 > highestLevel){
            highestLevel = level-1;
            changeLevel();
        }
        h2.innerHTML = `Game Over Try again...Your score is <b>${level-1}</b>`;
    }
}


let resetbtn = document.querySelector('#reset');
resetbtn.addEventListener('click', reset);

function reset(){
    h2.innerText = 'New Game...Press Any Key'
    started = false;
    gameSeq = [];
    userseq = [];
    level = 0;
}

function changeLevel(){
    score.innerText = `Your current highest Score: ${highestLevel}`; 
}