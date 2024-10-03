const counter = document.getElementById('counter');
const btnIncrease = document.getElementById('increase');
const btnDecrease = document.getElementById('decrease');
const btnReset = document.getElementById('reset');
let count = 0;


function increment() {
    count++;
    counter.textContent = count;
}

function decrement() {
    count--;
    counter.textContent = count;
}

function reset() {
    count = 0;
    counter.textContent = count;
}

btnIncrease.addEventListener('click', increment);
btnDecrease.addEventListener('click', decrement);
btnReset.addEventListener('click', reset);