var expect = require('chai').expect;

describe('checkForShip', function () {
    var checkForShip = require('../game_logic/ship_methods').checkForShip;
    var player;

    before(function () {
        player = {
            ships: [
                {
                    locations: [[0, 0], [0, 1]]
                },
                {
                    locations: [[1, 0], [1, 1]]
                },
                {
                    locations: [[2, 0], [2, 1], [2, 2], [2, 3]]
                }
            ]
        };
    });

    it("should correctly report no ship at a given player's coordinate", function () {
        expect(checkForShip(player, [9, 9])).to.be.false;
    });

    it("should correctly report a ship at a given player's coordinate", function () {
        expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
    });

    it("should handle ships located at more than one coordinate", function () {
        expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
        expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
        expect(checkForShip(player, [9, 9])).to.be.false;
    });

    it("should handle checking multiple ships", function () {
        expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
        expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
        expect(checkForShip(player, [1, 0])).to.deep.equal(player.ships[1]);
        expect(checkForShip(player, [1, 1])).to.deep.equal(player.ships[1]);
        expect(checkForShip(player, [2, 3])).to.deep.equal(player.ships[2]);
        expect(checkForShip(player, [9, 9])).to.be.false;
    });

});

describe('damageShip', function () {
    var damageShip = require('../game_logic/ship_methods').damageShip;

    it('should register damage on a given ship at a given location', function () {
        var ship = {
            locations: [[0, 0]],
            damage: []
        };

        damageShip(ship, [0, 0]);

        expect(ship.damage).to.not.be.empty;
        expect(ship.damage[0]).to.deep.equal([0, 0]);
    });
});

describe('fire', function () {
   var fire =  require('../game_logic/ship_methods').fire;
    var player;

    beforeEach(function () {
        player = {
            ships: [
                {
                    locations: [[0,0]],
                    damage:[]
                }
            ]
        };
    });

    it("should record damage on the given player's ship at a given coordinate", function () {
        fire(player, [0,0]);
        expect(player.ships[0].damage[0]).to.deep.equal([0,0]);
    });

    it("should NOT record damage if there is no ship at the given coordinates", function () {
        fire(player, [9,9]);
        expect(player.ships[0].damage).to.be.empty;
    });

});

describe('clone', function () {
    var clone = require('../game_logic/ship_methods').clone;
    it('some description string', function () {

        // YOUR CODE HERE
        var x = {
            name: 'Haris'
        };
        expect(clone(x)).to.deep.equal(x);

    })
});