const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const timer = document.getElementById("timer");

let seconds = 0;
let interval = null;

function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

function updateTimer() {
    timer.textContent = formatTime(seconds);
}

function startTimer() {
    if (interval) return;
    interval = setInterval(() => {
        seconds++;
        updateTimer();
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);

updateTimer();