// for (i=1; i<=5; i++) {
//     console.log (i);
// }

for (let line = 1; line <= 5; line++) {
    let str = '';
    for (let numInLine =1; numInLine <= line; numInLine++) {
        str += numInLine;
    }
    console.log(str);    
}
for (let i = 5; i >= 1; i--) { //отвечает за количество строк
    let str ='';
    for (let j = i; j >= 1; j--) {
        str += j;
    }
    console.log(str);
}