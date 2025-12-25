let hour = minute = second = millisecond = "0" + 0,
    startTimer;

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function start() {
    startBtn.classList.add("active");
    stopBtn.classList.remove("stopActive");

    startTimer = setInterval(()=>{
        millisecond++
        millisecond = millisecond < 10 ? "0" + millisecond : millisecond;

        if (millisecond == 100) {
            second++;
            second = second < 10 ? "0" + second : second;
            millisecond = "0" + 0;
        }

        if (second == 60) {
            minute++;
            minute = minute < 10 ? "0" + minute : minute;
            second = "0" + 0;
        }

        if (minute == 60) {
            hour++;
            hour = hour < 10 ? "0" + hour : hour;
            minute = "0" + 0;
        }

        putValue();
    }, 10);
}

function stop() {
    startBtn.classList.remove("active");
    stopBtn.classList.add("stopActive");
    clearInterval(startTimer);
}

function reset() {
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");
    clearInterval(startTimer);
    hour = minute = second = millisecond = "0" + 0;
    putValue();
}

function putValue() {
    document.querySelector(".millisecond").innerText = millisecond;
    document.querySelector(".second").innerText = second;
    document.querySelector(".minute").innerText = minute;
    document.querySelector(".hour").innerText = hour;

}