let height = 7;
let halfTree = height - 1;
for (let i = 0; i < height; i++) {
    let line = ""
    for (let j = 0; j < halfTree-i; j++) {// loop for " "
        line += " "
    }
    for (let j = 0; j < 2*i + 1; j++) {// loop for "*"
        line += "*"
    }
    console.log(line)
}
for (let i = height - 2; i >= 0; i--) {
    let line = ""
    for (let j = 0; j < halfTree-i; j++) {  // loop for " "
        line += " "
    }
    for (let j = 0; j < 2*i + 1; j++) {     // loop for "*"
        line += "*"
    }
    console.log(line);
}