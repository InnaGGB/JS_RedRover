let numOne = Number (prompt ('Enter the 1st value'));
let numTwo = Number (prompt ('Enter the 2nd value'));
let operator = prompt ('type the operator');
if (operator == '/' && (numOne == 0 || numTwo == 0)) {
    document.write ('You cant divide by zero');
    }
else if (operator == '/') {
    document.write (numOne/numTwo);
}
else if (operator == '+') {
    document.write ((numOne) + (numTwo));
}
else if (operator == '-') {
    document.write (numOne - numTwo);
}
else if (operator == '*') {
    document.write (numOne * numTwo);
}