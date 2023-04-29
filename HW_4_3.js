// let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// let numTwo = '';

// for (let i = 0; i<5; i++) {
    
//     numTwo += num[i];
// console.log (numTwo);
// } 

let str = '';
let x = 5;
let space = ' ';
for (let i = 1; i <=x; i++) {
    let num = i;
    for  (let j = 1; j <= i; j++) {
        str += num + space;
        num = num + (x-j)
    }
    str +='\n';
}
console.log(str);