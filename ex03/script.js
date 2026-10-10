let count = 0;

const countDisplay = document.getElementById("count");

function updateCount() {
    countDisplay.textContent = count;

    if (count > 0) {
        countDisplay.style.color = "green";
    } else if (count < 0) {
        countDisplay.style.color = "red";
    } else {
        countDisplay.style.color = "black";
    }
}

document.getElementById("increment").addEventListener("click", function () {
    count++;
    updateCount();
});

document.getElementById("decrement").addEventListener("click", function () {
    count--;
    updateCount();
});

document.getElementById("reset").addEventListener("click", function () {
    count = 0;
    updateCount();
});