//variables
const pegboard = document.querySelector('.pegboard');
const resetBtn = document.querySelector('.resetBtn');
const cells = document.querySelectorAll('.cell');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const tan = document.querySelector('.tan');
const brown = document.querySelector('.brown');
const black = document.querySelector('.black');
const white = document.querySelector('.white');
let selectedColor = "black";

//events
//pegboard.addEventListener('click',onCellClick);
cells.forEach(function addEventListener(cell){
    cell.addEventListener('click',onCellClick);
});

resetBtn.addEventListener('click',reset);
green.addEventListener('click',greenClick);
blue.addEventListener('click',blueClick);
red.addEventListener('click',redClick);
yellow.addEventListener('click',yellowClick);
tan.addEventListener('click',tanClick);
brown.addEventListener('click',brownClick);
black.addEventListener('click',blackClick);
white.addEventListener('click',whiteClick);

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
function blueClick(event) {
    selectedColor = "blue"
}
function redClick(event) {
    selectedColor = "red"
}
function yellowClick(event) {
    selectedColor = "yellow"
}
function tanClick(event) {
    selectedColor = "tan"
}
function brownClick(event) {
    selectedColor = "brown"
}
function blackClick(event) {
    selectedColor = "black"
}
function whiteClick(event) {
    selectedColor = "white"
}
//kick it off
