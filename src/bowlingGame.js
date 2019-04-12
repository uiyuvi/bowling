var BowlingGame = function(){
    var score = 0;
    var rolls = [];
    this.roll = function(pins){
        rolls.push(pins);
    }

    this.score = function(){
        var roll = 0;
        if(!(rolls.length > 0)){
            return score;
        }

        for (let frame = 0; frame < 10; frame++){
            if(frameScore(rolls, roll) == 10){
                score += 10 + bonusForSpare(rolls, roll)
                roll += 2;
            } else if(rolls[roll] == 10){
                score += 10 + bonusForStrike(rolls,roll);
                roll += 1;
            } else {
                score += frameScore(rolls, roll);
                roll += 2;
            }
        }
        return score;
    }
}

module.exports = BowlingGame;

function bonusForStrike(rolls,roll){
    return rolls[roll+1] + rolls[roll+2];
}

function bonusForSpare(rolls, roll) {
    return rolls[roll + 2];
}

function frameScore(rolls, roll) {
    return rolls[roll] + rolls[roll + 1];
}

