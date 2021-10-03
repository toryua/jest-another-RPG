const { TestWatchtester } = require('@jest/core');
const Player = require('../lib/Player');
const Potion = require('../lib/Potion');
jest.mock('../lib/Potion');

console.log(new Potion());

// write a test that checks for existence of name, health, strength, and agility

test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

})