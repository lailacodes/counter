let count = 0;
// functions to manipulate the count
function increment(){
    let add = document.getElementById("num");
    add.innerHTML = ++count;
    if (count > 0) add.style.color = "forestgreen"
    else if(count == 0) add.style.color = "darkslategrey"
}

function decrement(){
    let subtract = document.getElementById("num");
    subtract.innerHTML = --count;
    if (count < 0) subtract.style.color = "darkred"
    else if(count == 0) subtract.style.color = "darkslategrey"

}

function resetCount(){
    count = 0;
    let reset = document.getElementById("num");
    reset.innerHTML = count;
    if(count == 0) reset.style.color = "darkslategrey"
}