let random1 = Math.random();
let random2 = Math.random();
let random3 = Math.random();

let first, second, third;

if (random1 <= 0.33){
    first = "Crazy";
}
else if((random1 > 0.33) && (random1 <= 0.66)){
    first = "Amazing";
}
else{
    first = "Fire";
}



if (random2 <= 0.33){
    second = "Engine";
}
else if((random2 > 0.33) && (random2 <= 0.66)){
    second = "Foods";
}
else{
    second = "Garments";
}



if (random3 <= 0.33){
    third = "Bros";
}
else if((random3 > 0.33) && (random3 <= 0.66)){
    third = "Limited";
}
else{
    third = "Hub";
}


console.log(`${first} ${second} ${third}`)