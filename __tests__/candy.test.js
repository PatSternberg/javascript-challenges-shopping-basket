// file: __tests__/candy.test.js

const Candy = require('../src/candy');

describe('Candy class constructor tests', () => {
  test('instances of Candy construct with the appropriate stored name', () => {
    const testCandy = new Candy('Bueno', 4.99);
    expect(testCandy.name) = 'Beno';
  });
  test('instances of Candy construct with the appropriate stored price', () => {
    const testCandy = new Candy('Bueno', 4.99);
    expect(testCandy.price) = 4.99;
  });
});