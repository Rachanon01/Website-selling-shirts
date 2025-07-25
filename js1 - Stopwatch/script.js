window.onload = function() {
    let seconds = 0;
    let tens = 0;
    let interval;

    const startButton = document.getElementById("button-start");
    const stopButton = document.getElementById("button-stop");
    const resetButton = document.getElementById("button-reset");
    const secondsDisplay = document.getElementById("seconds");
    const tensDisplay = document.getElementById("tens");

    startButton.addEventListener("click", function() {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    });

    stopButton.addEventListener("click", function() {
        clearInterval(interval);
    });

    resetButton.addEventListener("click", function() {
        clearInterval(interval);
        seconds = 0;
        tens = 0;
        secondsDisplay.innerHTML = "00";
        tensDisplay.innerHTML = "00";
    });

    function startTimer() {
        tens++;
        if (tens > 99) {
            tens = 0;
            seconds++;
        }
        secondsDisplay.innerHTML = ("0" + seconds).slice(-2);
        tensDisplay.innerHTML = ("0" + tens).slice(-2);
    }
}