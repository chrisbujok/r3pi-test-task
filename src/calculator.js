import Store from './store';
import Basket from './basket';
import { calculateDiscount } from './discounts';

export default class Calculator {
  constructor(store, basket) {
    if (!(store instanceof Store)) {
      throw new Error('Invalid `store` passed.');
    }

    if (!(basket instanceof Basket)) {
      throw new Error('Invalid `basket` passed.');
    }

    this.store = store;
    this.basket = basket;
  }

  getLineItems() {
    const basketItems = this.basket.getItems();
    const storeItems = this.store.getItems();

    return Object.keys(basketItems).map(
      id => {
        const item = storeItems.entities.items[id];
        const quantity = basketItems[id];

        return {
          ...item,
          quantity,
          sum: quantity * item.price,
        };
      }
    );
  }

  getSummary() {
    const basketItems = this.basket.getItems();
    const storeItems = this.store.getItems();

    return Object.keys(basketItems).reduce(
      (result, id) => {
        const item = storeItems.entities.items[id];
        const quantity = basketItems[id];

        const sum = item.price * quantity;
        const discount = calculateDiscount(item, quantity);

        return {
          sum: result.sum + sum,
          discount: result.discount + discount,
          total: result.total + sum - discount,
        };
      },
      { sum: 0, discount: 0, total: 0 }
    );
  }
}
