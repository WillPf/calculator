
let n1 = "";
let n2 = "";
let operator = null;

const calculator = document.querySelector(".calc-ctn");
const screen = document.querySelector(".display-ctn");

calculator.addEventListener("click", e => {
    let key = e.target.innerText;

    if (key == "/" ) operator = div;
    else if (key == "*" ) operator = mul;
    else if (key == "-" ) operator = sub;
    else if (key == "+" ) operator = add;
    else if (key == "=") display(operate(+n1, +n2, operator));
    else {
        if (operator == null) {
            n1 += key;
            display(n1);
        }
        else {
            n2 += key;
            display(n2);
        }
    }
    
    
})

function add(a, b) {
    return (a + b).toString();
}
function sub(a, b) {
    return (a - b).toString();
}
function mul(a, b) {
    return (a * b).toString();
}
function div(a, b) {
    return (a / b).toString();
}

function operate(a, b, operation) {
    let result = operation(a, b);
    n1 = result;
    n2 = "";
    operator = null;    
    return result;
}

function display(n) {
    screen.innerText = n;
}