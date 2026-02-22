let a = Number(prompt("Enter 1st number : "));
let b = Number(prompt("Enter 2nd number : "));
let operation = prompt("Enter operation to perform : ");
let random = Math.random();

if (random < 0.1){
    if (operation == "+"){
        alert(a - b) 
    }

    else if (operation == "*"){
        alert(a + b) 
    }

    else if (operation == "-"){
        alert(a / b) 
    }

    else if (operation == "/"){
        alert(a ** b) 
    }
}
else{
    if (operation == "+"){
        alert(a + b) 
    }

    else if (operation == "*"){
        alert(a * b) 
    }

    else if (operation == "-"){
        alert(a - b) 
    }

    else if (operation == "/"){
        alert(a / b) 
    }
}