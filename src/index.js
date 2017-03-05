import Store from './store';
import Basket from './basket';
import Calculator from './calculator';
import * as printer from './printer';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const store = new Store();
const basket = new Basket(store);
const calculator = new Calculator(store, basket);

const storeItems = store.getItems();

storeItems.result.forEach(item => {
  basket.addItem(item, getRandomInt(1, 15));
});

const lineItems = calculator.getLineItems();
const summary = calculator.getSummary();

printer.printLineItems(lineItems);
printer.printSummary(summary);
