import { Game } from "../src/game.js";

describe('Fuzzy, medium', () => {
  jest.useFakeTimers();
  let game;

  beforeEach(function() {
    game = new Game("Fuzzy", "medium")
    game.startGame();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a name and a food level of 10 when it is created', () => {
    expect(game.hungryBear.name).toEqual("Fuzzy");
    expect(game.hungryBear.foodLevel).toEqual(10);
  });

  test('should have a food level of 9 after 1001 milliseconds', () => {
    jest.advanceTimersByTime(1001);
    expect(game.hungryBear.foodLevel).toEqual(9);
  });

  test('should get very hungry if the food level drops below zero', () => {
    game.hungryBear.foodLevel = 0;
    expect(game.hungryBear.didYouGetEaten()).toEqual(true);
  });

  test('should get very hungry if 10 seconds pass without feeding', () => {
    jest.advanceTimersByTime(10001);
    expect(game.hungryBear.didYouGetEaten()).toEqual(true);
  });

  test('should have a food level of ten if it is fed', () => {
    jest.advanceTimersByTime(9001);
    game.hungryBear.feed();
    expect(game.hungryBear.foodLevel).toEqual(10);
  });

  test('increases levels correctly', () => {
    game.startGame();
    game.hungryBear.increaseLevel();
    jest.advanceTimersByTime(901);
    expect(game.hungryBear.foodLevel).toEqual(9);
  });

  test('increases levels correctly', () => {
    game.startGame();
    game.hungryBear.increaseLevel();
    jest.advanceTimersByTime(899);
    expect(game.hungryBear.foodLevel).toEqual(10);
  });


  test("see if game ends if it hasn't been petted after 5001 ms", () => {
    jest.advanceTimersByTime(5001);
    expect(game.isGameOver).toEqual(true);
  });

  test("see if game doesn't end if it hasn't been petted after 4999 ms", () => {
    jest.advanceTimersByTime(4999);
    expect(game.isGameOver).toEqual(false);
  });

});


describe('Fuzzy, easy', () => {
  jest.useFakeTimers();
  let game;

  beforeEach(function() {
    game = new Game("Fuzzy", "easy")
    game.startGame();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a name and a food level of 10 when it is created', () => {
    expect(game.hungryBear.name).toEqual("Fuzzy");
    expect(game.hungryBear.foodLevel).toEqual(10);
  });

  test('should have a food level of 7 after 4501 milliseconds', () => {
    jest.advanceTimersByTime(4501);
    expect(game.hungryBear.foodLevel).toEqual(7);
  });

  test('should get very hungry if the food level drops to zero', () => {
    game.hungryBear.foodLevel = 0;
    expect(game.hungryBear.didYouGetEaten()).toEqual(true);
  });

  test('should get very hungry if 15 seconds pass without feeding', () => {
    jest.advanceTimersByTime(15001);
    expect(game.hungryBear.didYouGetEaten()).toEqual(true);
  });

  test('should have a food level of 15 if it is fed', () => {
    jest.advanceTimersByTime(14001);
    game.hungryBear.feed();
    expect(game.hungryBear.foodLevel).toEqual(15);
  });

  test('increases levels correctly', () => {
    game.startGame();
    game.hungryBear.increaseLevel();
  
    jest.advanceTimersByTime(1401);
    expect(game.hungryBear.foodLevel).toEqual(9);
  });

  test('increases levels correctly', () => {
    game.startGame();
    game.hungryBear.increaseLevel();
    jest.advanceTimersByTime(1301);
    expect(game.hungryBear.foodLevel).toEqual(10);
  });


});

describe('Fuzzy, hard', () => {
  jest.useFakeTimers();
  let game;

  beforeEach(function() {
    game = new Game("Fuzzy", "hard")
    game.startGame();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a name and a food level of 10 when it is created', () => {
    expect(game.hungryBear.name).toEqual("Fuzzy");
    expect(game.hungryBear.foodLevel).toEqual(10);
  });

  test('should have a food level of 7 after 1501 milliseconds', () => {
    jest.advanceTimersByTime(1501);
    expect(game.hungryBear.foodLevel).toEqual(7);
  });

  test('should get very hungry if the food level drops below zero', () => {
    game.hungryBear.foodLevel = 0;
    expect(game.hungryBear.didYouGetEaten()).toEqual(true);
  });

  test('should get very hungry if 5 seconds pass without feeding', () => {
    jest.advanceTimersByTime(5001);
    expect(game.hungryBear.didYouGetEaten()).toEqual(true);
  });

  test('should have a food level of 5 if it is fed', () => {
    jest.advanceTimersByTime(9001);
    game.hungryBear.feed();
    expect(game.hungryBear.foodLevel).toEqual(5);
  });

  test('increases levels correctly', () => {
    game.startGame();
    game.hungryBear.increaseLevel();
    jest.advanceTimersByTime(401);
    expect(game.hungryBear.foodLevel).toEqual(9);
  });

  test('increases levels correctly', () => {
    game.startGame();
    game.hungryBear.increaseLevel();
    jest.advanceTimersByTime(301);
    expect(game.hungryBear.foodLevel).toEqual(10);
  });

});