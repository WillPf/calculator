
let a = 0;
let b = 0;
let operator = null;



function add(a, b) {
    return a + b
}
function sub(a, b) {
    return a - b
}
function mul(a, b) {
    return a * b
}
function div(a, b) {
    return a / b
}

function operate(a, b, operator) {
    return operator(a, b)
}