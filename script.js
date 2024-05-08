const display = document.getElementById("display");
const lapsDisplay = document.getElementById("laps");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
let lapCounter = 1;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
    lapsDisplay.innerHTML = "";
    lapCounter = 1;
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

function recordLap() {
    if (isRunning) {
        const lapTime = display.textContent;
        const lapItem = document.createElement("div");
        lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
        lapsDisplay.appendChild(lapItem);
        lapCounter++;
    }
}
// JavaScript code

function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
        
        // Flash effect on stop
        display.style.color = '#f44336'; 
        setTimeout(() => {
            display.style.color = '#333'; // Revert back to original color
        }, 300);
    }
}

function recordLap() {
    if (isRunning) {
        const lapTime = display.textContent;
        const lapItem = document.createElement("div");
        lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
        lapsDisplay.appendChild(lapItem);
        lapCounter++;
        
        // Flash effect on recording a lap
        display.style.color = '#ffeb3b'; 
        setTimeout(() => {
            display.style.color = '#333'; // Revert back to original color
        }, 300);
    }
}
