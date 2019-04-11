var BowlingGame = function(){
    var score = 0;
    var rolls = [];
    this.roll = function(pins){
        rolls.push(pins);
    }

    this.score = function(){
        for (let roll = 0; roll < rolls.length; roll++){
            score += currentRollScore(rolls, roll);
        }
        return score;
    }
}

module.exports = BowlingGame;

function currentRollScore(rolls, roll) {
    return rolls[roll];
}
