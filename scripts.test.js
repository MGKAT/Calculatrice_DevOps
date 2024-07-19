const { addition, soustraction, multiplication, division } = require('./scripts');

test('addition de 2 et 3 doit être 5', () => {
    expect(addition(2, 3)).toBe(5);
});

test('soustraction de 5 et 2 doit être 3', () => {
    expect(soustraction(5, 2)).toBe(3);
});

test('multiplication de 3 et 4 doit être 12', () => {
    expect(multiplication(3, 4)).toBe(12);
});

test('division de 10 par 2 doit être 5', () => {
    expect(division(10, 2)).toBe(5);
});

test('division par 0 doit être Infinity', () => {
    expect(division(10, 0)).toBe(Infinity);
});
