const calculator = document.querySelector(".calc-ctn");
const screen = document.querySelector(".display-ctn");

let n1 = "";
let n2 = "";
let operator = null;

calculator.addEventListener("click", e => {
    let key = e.target.innerText;
    
    if (key == "/" ) operator = div;
    else if (key == "*" ) operator = mul;
    else if (key == "-" ) operator = sub;
    else if (key == "+" ) operator = add;
    else if (key == "=") display(operate(+n1, +n2, operator));
    else if (key == "CE" ) {
        if (operator == null) {
            n1 = n1.slice(0, -1);
            display(n1);
        } else {
            n2 = n2.slice(0, -1);
            display(n);
        }    
    }
    else if (key == "C" ) {
        n1 = "";
        n2 = "";
        operator = null;
        display(0);
    }
    else {
        if (operator == null) {
            if (key == "." && n1.includes(".")) key = "";
            n1 += key;
            n1 = checkForLeadingZero(n1);
            display(n1);
        } else {
            if (key == "." && n2.includes(".")) key = "";
            n2 += key;
            n2 = checkForLeadingZero(n2);
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

// Removes the first 0 if the first character of the string is a 0 and the second char is not a .
function checkForLeadingZero(string) {
    const regex = /^0[^.]/;
    if (regex.test(string)) return string.substring(1);
    else return string;
}

