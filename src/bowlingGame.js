var BowlingGame = function(){
    var score = 0;
    var rolls = [];
    this.roll = function(pins){
        rolls.push(pins);
    }

    this.score = function(){
        var roll = 0;
        for (let frame = 0; frame < 10; frame++){
            if(frameScore(rolls, roll) == 10){
                score += 10 + nextRollScore(rolls, roll)
            } else {
                score += frameScore(rolls, roll);
            }
            roll += 2;
        }
        return score;
    }
}

module.exports = BowlingGame;

function nextRollScore(rolls, roll) {
    return rolls[roll + 2];
}

function frameScore(rolls, roll) {
    return rolls[roll] + rolls[roll + 1];
}

