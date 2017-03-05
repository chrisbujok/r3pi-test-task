export default class Basket {
  items = {};

  addItem(id, quantity) {
    this.items[id] = (this.items[id] ? this.items[id] : 0) + quantity;
  }

  // @TODO: implement other methods like remove, update, etc.

  getItems() {
    return this.items;
  }
}
