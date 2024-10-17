const timer =  document.querySelector(".timerDisplay")
const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const rest = document.querySelector("#rest")

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;

start.addEventListener("click",(e)=>{
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer,10);
})
stop.addEventListener("click",(e)=>{
    clearInterval(timerId);
})
rest.addEventListener("click",(e)=>{
    clearInterval(timerId);
    timer.innerHTML = `00 : 00 : 00`;
})


function startTimer(){
   msec++;
   if(msec == 100){
    msec = 0;
    secs++;
    if(secs == 60){
        secs = 0;
        mins++;
    }
   }
   let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs; // Fixed here
    let minsString = mins < 10 ? `0${mins}` : mins; // Fixed here
    timer.innerHTML = `${minsString} : ${secsString} : ${msecString}`;

}
