let height = 10;  
let halfTree = height - 1;
let nums = 0;
for (let i = 0; i < height; i++) {
    let line = ""


    // loop for " "
    // i - номер строки
    for (let j = 0; j < halfTree-i; j++) {
        line += " "
    }
    // loop for "*"
    for (let j = 0; j < 2*i + 1; j++) {
        nums++
    }
    console.log(nums)
}
