let num = Number(prompt("Enter number : "));
let arr = [];

for (let i = 0; i < num; i++) {
    arr[i] = (i+1);
}

const fact = (a,b)=>{
    return a*b;
}
alert(arr.reduce(fact));