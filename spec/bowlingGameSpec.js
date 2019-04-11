const BowlingGame = require('../src/bowlingGame');

describe('Bowling Game', function(){
    it('should handle Gutter game', function () {
        var game = new BowlingGame();

        for (let rollCount = 0;rollCount < 20; rollCount++){
            game.roll(0);
        }

        expect(game.score()).toBe(0);
    });

    it('should return 20 for 1 in all roll',function(){
        var game = new BowlingGame();

        for (let rollCount = 0;rollCount < 20; rollCount++){
            game.roll(1);
        }

        expect(game.score()).toBe(20);
    });
});