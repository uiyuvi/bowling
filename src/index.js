var BowlingGame = require('./bowlingGame');

var bowlingGame = new BowlingGame();

document.getElementById("startGame").addEventListener('click', function (e) {
    for (let rollCount = 0;rollCount < 20; rollCount++){
        bowlingGame.roll(1);
    }
    document.getElementById("score").innerHTML = bowlingGame.score();
});