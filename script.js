let num = document.querySelector(".circle2");
let pause =  document.querySelector("#pause");
let play = document.querySelector("#play");
let reset = document.querySelector("#reset");
let count = 10;
let stop;



play.addEventListener("click", () => {
     if (stop) return;

     stop = setInterval(() => {
    num.innerHTML = count;
    console.log(count);
    count--;
     num.style.fontSize = "190px";

    if(count < -1){
        clearInterval(stop);
         stop = null;
        num.innerHTML = "Time's Up"
        console.log("Time's up");
        num.style.fontSize = "60px";
        return;
    }

}, 1000);
})

 pause.addEventListener("click", () => {
        clearInterval(stop);
        stop = null;
    })

        reset.addEventListener("click", () => {
            clearInterval(stop);
             stop = null;
            count = 10;
            num.innerHTML = count;
            num.style.fontSize = "190px";
})





