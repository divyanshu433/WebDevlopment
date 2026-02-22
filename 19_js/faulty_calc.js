let a = Number(prompt("Enter the number : "));
let b = Number(prompt("Enter the number : "));
let op = prompt("Enter operation to perform : ");
r = Math.random();

if(r<0.1){
    if(op = "+"){
        alert(a-b);
    }
    else if(op = "*"){
        alert(a+b);
    }
    else if(op = "-"){
        alert(a/b);
    }
    else if(op = "/"){
        alert(a**b);
    }
    else{
        alert("INVALID OPERATOR");
    }
}
else{
    if(op = "+"){
        alert(a+b);
    }
    else if(op = "*"){
        alert(a*b);
    }
    else if(op = "-"){
        alert(a-b);
    }
    else if(op = "/"){
        alert(a/b);
    }
    else{
        alert("INVALID OPERATOR");
    }
}