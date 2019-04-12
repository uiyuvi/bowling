var BowlingGame = require('./bowlingGame');

var bowlingGame = new BowlingGame();

document.getElementById("startGame").addEventListener('click', function (e) {    
    bowlingGame.roll(9);
    bowlingGame.roll(1);
    bowlingGame.roll(5);
    for (let rollCount = 0;rollCount < 17; rollCount++){
        bowlingGame.roll(0);
    }
    document.getElementById("score").innerHTML = bowlingGame.score();
});