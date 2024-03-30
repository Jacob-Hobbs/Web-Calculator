// import index.js modules
const { add, subtract } = require('./index');

// add() function tests
test('addition of two non-negative integers', () => {
    expect(add(1, 2)).toBe(3);
});

test('addition of two negative integers', () => {
    expect(add(-3, -2)).toBe(-5);
});

test('addition of positive and negative integers', () => {
    expect(add(-3, 2)).toBe(-1);
});

test('addition of integer and double values', () => {
    expect(add(1, 0.5)).toBe(1.5);
});

test('addition of two double values', () => {
    expect(add(0.75, 0.5)).toBe(1.25);
});

test('addition of expression and integer', () => {
    expect(add(3 + 5, 1)).toBe(9);
});

test('addition of two expressions', () => {
    expect(add(2 + 4, 10 - 6)).toBe(10);
});





// subtract() functions tests
test('description2', () => {
    expect(subtract(1, 2)).toBe(-1);
});

