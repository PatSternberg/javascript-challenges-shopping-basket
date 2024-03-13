// file: src/shopping_basket.js

class shoppingBasket {

  constructor() {
    this.contents = [];
  };

  addItem(candy) {
    this.contents.push(candy)
  };

  getTotalPrice() {
    let total_price = 0
    const addToTotal = (candy) => {
      total_price += candy.price
    };
    this.contents.map(addToTotal);
    return total_price
  };

};

module.exports = shoppingBasket;