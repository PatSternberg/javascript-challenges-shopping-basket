// file: __tests__/shopping_basket_unit.test.js

const shoppingBasket = require('../src/shopping_basket');

describe('shoppingBasket class constructor tests', () => {
  test('instances of shoppingBasket construct with the appropriate stored empty contents', () => {
    const testBasket = new shoppingBasket();
    expect(testBasket.contents) = [];
  });
  test('instances of shoppingBasket construct with the appropriate stored price of zero', () => {
    const testBasket = new shoppingBasket();
    expect(testBasket.price) = 0;
  });
});