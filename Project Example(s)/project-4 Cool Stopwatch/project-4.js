const stopPlayBtn = document.querySelector('#startStopButton');
const timer = document.querySelector('#timer');

let started = false;
let player = null;

//Stopwatch function
let second=0; let minute=0; let hour=0;
function stopWatch(){
    second++;
    if(second/60 === 1){
        minute++; second=0; return;
    }
    if(minute/60 === 1){
        hour++; minute=0; return;
    }

    //Stringify the time
    let leadingSecond = (second<10)?'0'+second.toString() : second.toString();
    let leadingMinute = (minute<10)?'0'+minute.toString() : minute.toString();
    let leadingHour = (hour<10)?'0'+hour.toString() : hour.toString();

    //changing the text
    timer.innerText = leadingHour + ':' + leadingMinute + ':' + leadingSecond;
}

//Assigning to button
//START-PAUSE-BUTTON
stopPlayBtn.addEventListener('click', ()=>{
    started = !started;
    if(started){
        stopPlayBtn.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        player = window.setInterval(stopWatch, 1000);
        return;
    }
    stopPlayBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    window.clearInterval(player);
})

//RESET-BUTTON
document.querySelector('#resetButton').addEventListener('click', ()=>{
    timer.innerText = '00:00:00';
    second=0;minute=0;hour=0;
    if(player!=null){
        window.clearInterval(player);
        stopPlayBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        started=false;
    }
})
