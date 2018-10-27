//variables
const pegboard = document.querySelector('.pegboard');
const resetBtn = document.querySelector('.resetBtn');


//events
pegboard.addEventListener('click',onCellClick);
resetBtn.addEventListener('click',reset);

//functions
function onCellClick(event) {
    const element = event.target;
    element.style.backgroundColor = "salmon";
}

function reset(event) {

}

//kick it off
