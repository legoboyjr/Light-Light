//variables
const pegboard = document.querySelector('.pegboard');
const resetBtn = document.querySelector('.resetBtn');
const cells = document.querySelectorAll('.cell');


//events
pegboard.addEventListener('click',onCellClick);
resetBtn.addEventListener('click',reset);

//functions
function onCellClick(event) {
    const element = event.target;
    element.style.backgroundColor = "salmon";
}
function reset(event) {
    cells.forEach(function resetCell(cell){
        cell.style.backgroundColor = "";
    });
}
//kick it off
