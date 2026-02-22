let num = Number(prompt("Enter number to calc factorial : "));
let fact = 1;

for (i = 1; i <= num; i++){
    fact *= i;
}

alert(fact);