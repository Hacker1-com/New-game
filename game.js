let playerCar = document.getElementById("playerCar");
let road = document.querySelector(".road");
let scoreElement = document.getElementById("score");

let score = 0;
let gameSpeed = 5;
let carPosition = 180;  // Starting position

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft" && carPosition > 0) {
        carPosition -= 10;
    }
    if (event.key === "ArrowRight" && carPosition < 360) {
        carPosition += 10;
    }
    playerCar.style.left = carPosition + "px";
});

function updateGame() {
    score++;
    scoreElement.innerText = score;

    // Move the road background for an illusion of speed
    road.style.backgroundPositionY = score * gameSpeed + "px";

    requestAnimationFrame(updateGame);
}

// Start the game
updateGame();
