let num = document.querySelector(".circle2");

let stop;
let count = 10;

stop = setInterval(() => {
    num.innerHTML = count;
    console.log(count);
    count--;

    if(count == -1){
        
        clearInterval(stop);
        num.innerHTML = "Time's Up"
        console.log("Time's up");
        num.style.fontSize = "60px";
    }
}, 1000);