function sum(a, b) {
    if (typeof a !== 'number') {
        throw new Error('value must be number');
    }
    return a + b;
  }
  module.exports = sum;



