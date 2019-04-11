const BowlingGame = require('../src/bowlingGame');

describe('Bowling Game', function(){
    var game;
    var multipleRollWithPin = function(rollCount, pin){
        for (let roll = 0;roll < rollCount; roll++){
            game.roll(pin);
        }
    }

    beforeEach(function () {
        game = new BowlingGame();
    });

    it('should handle Gutter game', function () {
        multipleRollWithPin(20,0);

        expect(game.score()).toBe(0);
    });

    it('should return 20 for 1 in all roll',function(){
        multipleRollWithPin(20,1);

        expect(game.score()).toBe(20);
    });

    it('should handle spare', function(){
        game.roll(9);
        game.roll(1);
        game.roll(5);
        multipleRollWithPin(17,0);

        expect(game.score()).toBe(20);
    })
});