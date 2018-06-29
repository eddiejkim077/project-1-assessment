//state
var sum;





//cached elements
var displayEl = document.querySelector('h1');
var input = document.getElementById('input');
var butAdd = document.getElementById('add');
var butSub = document.getElementById('sub');





//event listeners

document.getElementById('add').addEventListener('click', handleAddClick);
document.getElementById('sub').addEventListener('click', handleSubClick);



//functions
function handleAddClick(){
    sum += parseFloat(input.value);
    render();
};

function handleSubClick(){
    sum -= parseFloat(input.value);
    render();
}


function init(){
    sum = 0;
    input.value = 1;
    render();
};

function render(){
    displayEl.textContent = sum;
    displayEl.style.color = sum < 0 ? 'red' : 'black';
};

init();