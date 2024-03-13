// file: __tests__/shopping_basket_integration.test.js

const shoppingBasket = require('../src/shopping_basket');

describe('shoppingBasket class addItem tests', () => {
  test('shoppingBasket.addItem correctly adds an item to the stored array', () => {
    const testBasket = new shoppingBasket();
    const testCandy = { };
    testBasket.addItem(testCandy);
    expect(testBasket.contents).toEqual([testCandy]);
  });
  test('shoppingBasket.addItem correctly stores multiple candies\' information in the stored array', () => {
    const testBasket = new shoppingBasket();
    const testCandy1 = { name: 'Bueno', price: 3.99 };
    const testCandy2 = { name: 'Skittles', price: 1.99 };
    testBasket.addItem(testCandy1);
    testBasket.addItem(testCandy2);
    expect(testBasket.contents).toEqual([testCandy1, testCandy2]);
    expect(testBasket.contents[0]).toEqual({name: 'Bueno', price: 3.99});
    expect(testBasket.contents[1]).toEqual({name: 'Skittles', price: 1.99});
  });
});

describe('shoppingBasket class getTotalPrice tests', () => {
  test('shoppingBasket.getTotalPrice correctly returns the price of a stored item', () => {
    const testBasket = new shoppingBasket();
    const testCandy = { name: 'Bueno', price: 3.99 };
    testBasket.addItem(testCandy);
    expect(testBasket.getTotalPrice()).toEqual(3.99);
  });
  test('shoppingBasket.getTotalPrice correctly adds and returns the price of multiple stored items', () => {
    const testBasket = new shoppingBasket();
    const testCandy1 = { name: 'Bueno', price: 3.99 };
    const testCandy2 = { name: 'Skittles', price: 1.99 };
    testBasket.addItem(testCandy1);
    testBasket.addItem(testCandy2);
    expect(testBasket.getTotalPrice()).toEqual(5.98);
  });
});