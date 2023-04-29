// let h = 5;
// let day = 3;
// let night = 2;
// let result = (1 + (h - day) / (day - night) + ((h - day) % (day - night) + day - night - 1) / (day - night));
// console.log (`The snail will crawl for ${result} days` );


let dayDistance = 3;
let nightDown = -2;
let distance = 0;
let days = 0;

if ((distance += dayDistance) <= 5) {
    days ++
    console.log(`Current distance at the end of the day ${days} is ${distance} meter`);
    distance += nightDown;
}
if ((distance += dayDistance) <= 5) {
    days ++
    console.log(`Current distance at the end of the day ${days} is ${distance} meter`);
    distance += nightDown;
}
if ((distance += dayDistance) <= 5) {
    days ++
    console.log(`Current distance at the end of the day ${days} is ${distance} meter`);
    distance += nightDown;
}