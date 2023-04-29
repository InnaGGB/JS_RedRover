// let arr = ['(', ')', '(', ')', ')'];
// for (let i=0; i<=arr.length; i++) {
// if ((arr[i] === '(' && arr[i+1] === ')') || arr[i] === ')' && arr.at (-1) === '(')  {
//     console.log ('matching brackets')
// }
// else {
//     console.log (arr[i],'doesnt have a match bracket');
// }
// }

let arr = ['(', ')', '(', ')', ')'];
let openBracket = 0;
let closeBracket = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ('(')) {
        openBracket +=1;
    }
    else {
        closeBracket +=1;
    }
}
console.log (`Open brackets sum = ${openBracket}, Close brackets sum = ${closeBracket}`);
if (openBracket === closeBracket) {
    console.log ("Equal");
}
else {
    console.log ("Not Equal");
}