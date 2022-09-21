const choose = document.querySelector('.boxes');
const selectall = document.getElementsByClassName('box');
let youChoose;

choose.addEventListener('click',(e)=>{
    removeBoxColor();

    if(e.target.classList.contains('box1')){
        youChoose = 'rock'
        e.target.style.backgroundColor = 'black';
        e.target.style.color = 'rgba(240, 230, 140, 0.854)';
    }
    if(e.target.classList.contains('box2')){
        youChoose = 'paper'
        e.target.style.backgroundColor = 'black';
        e.target.style.color = 'rgba(240, 230, 140, 0.854)';
    }
    if(e.target.classList.contains('box3')){
        youChoose = 'scissor'
        e.target.style.backgroundColor = 'black';
        e.target.style.color = 'rgba(240, 230, 140, 0.854)';
    }

    newfun();  
}); 

let winYouTimes = 0;
let winCompTimes = 0;
let matchTieTimes = 0;
const newfun = ()=>{

    const select = ['rock','paper','scissor'];
    const random = Math.floor(Math.random()*select.length);
    // or use this method as well const random = Math.floor(Math.random()*3)
    let computerChoose = select[random];
    document.getElementById('youSelect').textContent = youChoose;
    document.getElementById('computerSelect').textContent = computerChoose;

    if((computerChoose == youChoose)){
        winner = 'Match Tie'
        matchTieTimes += 1;
    }
    else if((computerChoose == 'rock')& (youChoose == 'paper')){
        winner = 'You Win !'
        winYouTimes += 1;
    }
    else if((computerChoose == 'paper')& (youChoose == 'scissor')){
        winner = 'You Win !'
        winYouTimes += 1;
    }
    else if((computerChoose == 'scissor') & (youChoose == 'rock')){
        winner = 'You Win !'
        winYouTimes += 1;
    }
    else{
        winner = 'Computer Win !'
        winCompTimes += 1;
    }

    document.getElementById('winner').textContent = winner;
    
    const declearedResult = `You win ${winYouTimes} Times and computer win ${winCompTimes} and match tie ${matchTieTimes}`;
    document.querySelector('.result-decleared').textContent = declearedResult;
}

const removeBoxColor= ()=>{
    for(var i =0;i<selectall.length; i++){
        selectall[i].style.backgroundColor = 'rgba(240, 230, 140, 0.854)';
        selectall[i].style.color = 'black';
    }
}
const insideContainer = document.querySelector('.inside-container');
const hidden = document.querySelector('.hidden');

function restarted(){
    hidden.removeAttribute('hidden');
    insideContainer.classList.add('blur');
    
    setTimeout(() => {
        window.location.reload();
    }, 1000);
}
