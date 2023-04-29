// let text = 'You are the best QA';
// let newText ='';
// let count = 0;

// for (i=0; i<text.length; i++) {
//     if (count % 2 == 0) {
//         newText = newText + text[i]+'br'
//     }
//     count +=2;
// }
// console.log (newText);

// let decoderResult = '';
// for (i=0; i < newText.length; i +=3) {
//     decoderResult += newText[i] 
// }
// console.log (decoderResult);

let text = 'Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr';
let decoder = '';

for (let i = 0; i<text.length; i++) {
    if (text[i] == 'b' && text [i+=1] =='r') {
        continue }
        else {
            decoder = decoder + text[i];  
        }
        
    }
console.log (decoder);


    