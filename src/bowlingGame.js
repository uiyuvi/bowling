var BowlingGame = function(){
    var score = 0;
    this.roll = function(pins){
        score += pins;
    }

    this.score = function(){
        return score;
    }
}

module.exports = BowlingGame;