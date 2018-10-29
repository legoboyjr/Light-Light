//variables
const pegboard = document.querySelector('.pegboard');
const resetBtn = document.querySelector('.resetBtn');
const cells = document.querySelectorAll('.cell');
const green = document.querySelector('.green');
let selectedColor = "black";

//events
pegboard.addEventListener('click',onCellClick);
resetBtn.addEventListener('click',reset);
green.addEventListener('click',greenClick);

//functions
function onCellClick(event) {
    const element = event.target;
    element.style.backgroundColor = selectedColor;
}
function reset(event) {
    cells.forEach(function resetCell(cell){
        cell.style.backgroundColor = "";
    });
}
function greenClick(event) {
    selectedColor = "green"
}
//kick it off
