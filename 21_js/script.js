function random_col_gen (){
    let c1 = Math.ceil(0 + Math.random() * 255);
    let c2 = Math.ceil(0 + Math.random() * 255);
    let c3 = Math.ceil(0 + Math.random() * 255);

    return `rgb(${c1}, ${c2}, ${c3})`;;
}

let boxes =  document.querySelector(".container").children;

Array.from(boxes).forEach(e=>{
    e.style.color = random_col_gen();
    e.style.backgroundColor = random_col_gen();
})

