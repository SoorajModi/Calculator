import {
  add, divide, multiply, sub,
} from '../src';

describe('index.add() testing', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe('index.sub() testing', () => {
  it('should subtract two numbers', () => {
    expect(sub(2, 1)).toBe(1);
  });
});

describe('index.multiple() testing', () => {
  it('should subtract two numbers', () => {
    expect(multiply(5, 5)).toBe(25);
  });
});

describe('index.divide() testing', () => {
  it('should divide two numbers', () => {
    expect(divide(25, 5)).toBe(5);
  });
});
