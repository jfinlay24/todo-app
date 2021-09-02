const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('test entering a string throws an exception', () => {
    expect(() => sum('one',2)).toThrow('value must be number');
})
