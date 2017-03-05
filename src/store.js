import { normalize, schema as normalizrSchema } from 'normalizr';

const schema = [new normalizrSchema.Entity('items')];

export default class Store {
  items = [
    {
      id: 1,
      name: 'Apple',
      price: 0.25,
    },
    {
      id: 2,
      name: 'Orange',
      price: 0.30,
    },
    {
      id: 3,
      name: 'Garlic',
      price: 0.15,
    },
    {
      id: 4,
      name: 'Papaya',
      price: 1,
      specialOffers: [
        {
          type: 'bonusItem',
          freeFor: 3,
        },
      ],
    },
  ];

  constructor() {
    this.normalizedItems = normalize(this.items, schema);
  }

  getItems() {
    return this.normalizedItems;
  }
}
