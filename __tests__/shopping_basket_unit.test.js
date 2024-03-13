// file: __tests__/shopping_basket_unit.test.js

const shoppingBasket = require('../src/shopping_basket');

describe('shoppingBasket class constructor tests', () => {
  test('instances of shoppingBasket construct with the appropriate stored empty contents', () => {
    const testBasket = new shoppingBasket();
    expect(testBasket.contents).toEqual([]);
  });
});