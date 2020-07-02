import { HungryBear } from './../src/hungrybear.js';

describe('Fuzzy', () => {
  jest.useFakeTimers();
  let fuzzy;

  beforeEach(function() {
    fuzzy = new HungryBear("Fuzzy", "medium");
    fuzzy.setHunger();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a name and a food level of 10 when it is created', () => {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });

  test('should have a food level of 7 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  test('should get very hungry if the food level drops below zero', () => {
    fuzzy.foodLevel = 0;
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  test('should get very hungry if 10 seconds pass without feeding', () => {
    jest.advanceTimersByTime(10001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  test('should have a food level of ten if it is fed', () => {
    jest.advanceTimersByTime(9001);
    fuzzy.feed();
    expect(fuzzy.foodLevel).toEqual(10);
  });
});


describe('Fuzzy, easy', () => {
  jest.useFakeTimers();
  let fuzzy;

  beforeEach(function() {
    fuzzy = new HungryBear("Fuzzy", "easy");
    fuzzy.setHunger();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a name and a food level of 10 when it is created', () => {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });

  test('should have a food level of 7 after 4501 milliseconds', () => {
    jest.advanceTimersByTime(4501);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  test('should get very hungry if the food level drops below zero', () => {
    fuzzy.foodLevel = 0;
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  test('should get very hungry if 15 seconds pass without feeding', () => {
    jest.advanceTimersByTime(15001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  test('should have a food level of 15 if it is fed', () => {
    jest.advanceTimersByTime(9001);
    fuzzy.feed();
    expect(fuzzy.foodLevel).toEqual(15);
  });
});