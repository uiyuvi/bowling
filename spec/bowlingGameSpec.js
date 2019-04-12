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
    });

    it('should handle strike', function () {
        game.roll(10);
        game.roll(1);
        game.roll(5);
        multipleRollWithPin(17,0);
        
        expect(game.score()).toBe(22);
    });

    it('should handle perfect game', function () {
        multipleRollWithPin(12,10);
        
        expect(game.score()).toBe(300);
    });

    it('should handle both strike and spare in same game', function () {       
        game.roll(1);
        game.roll(4);
        game.roll(4);
        game.roll(5);
        game.roll(6);
        game.roll(4);
        game.roll(5);
        game.roll(5);
        game.roll(10);
        game.roll(0);
        game.roll(1);
        game.roll(7);
        game.roll(3);
        game.roll(6);
        game.roll(4);
        game.roll(10);
        game.roll(2);
        game.roll(8);
        game.roll(6);
        
        expect(game.score()).toBe(133);
    });
});