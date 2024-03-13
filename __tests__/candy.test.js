// file: __tests__/candy.test.js

const Candy = require('../src/candy');

describe('Candy class constructor tests', () => {
  test('instances of Candy construct with the appropriate stored name', () => {
    const testCandy = new Candy('Bueno', 4.99);
    expect(testCandy.name).toEqual('Bueno');
  });
  test('instances of Candy construct with the appropriate stored price', () => {
    const testCandy = new Candy('Bueno', 4.99);
    expect(testCandy.price).toEqual(4.99);
  });
});