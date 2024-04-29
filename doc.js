let count1 =document.querySelector('#hour')
let count2 =document.querySelector('#min')
let count3 =document.querySelector('#sec')
let startButton = document.querySelector("#Button1");
let stopButton = document.querySelector("#Button2");
let resetButton = document.querySelector("#Button3");
stopButton.style.display = 'none';
resetButton.style.display = 'none';

let seconds = 0;
let minutes = 0;
let hours = 0;
let startInterval;


 function but1() {  
    let seconds=0
    startButton.style.display = 'none';
    stopButton.style.display = 'inline';
    resetButton.style.display = 'none';
    startInterval=setInterval(function()  {
        seconds += 1;
        count3.innerHTML = seconds;
        count2.innerHTML = minutes;
        count1.innerHTML = hours;
        if (seconds > 59) {
            seconds = 0;
            count3.innerHTML = '00';
            minutes += 1;
            count3.innerHTML = minutes;
        }
        if (minutes > 59) {
            minutes = 0;
            count2.innerHTML = '00';
            hours += 1;
            count2 = minutes;
        }
        if (hours > 23) {
            hours = 0;
            count1.innerHTML = '00';
        }
    }, 1000);

   
}  
function but2() {

    startButton.innerHTML = 'Resume';
    startButton.style.display = 'inline';
    stopButton.style.display = 'none';
    resetButton.style.display = 'inline';
    clearInterval(startInterval)
}
function but3() {
    startButton.innerHTML = 'Start';
    startButton.style.display = 'inline';
    stopButton.style.display = 'none';
    resetButton.style.display = 'none';
    clearInterval(startInterval)
    seconds = 0;
    minutes = 0;
    hours = 0;
    secondHand.innerHTML = 0;
    
}





