export const discounts = {
  bonusItem(item, quantity, specialOffer) {
    return Math.floor(quantity / specialOffer.freeFor) * item.price;
  },
};

export function calculateDiscount(item, quantity) {
  if (!item.specialOffers || !item.specialOffers.length) {
    return 0;
  }

  return item.specialOffers.reduce(
    (discount, offer) => {
      if (!discounts[offer.type]) {
        return discount;
      }

      return discount + discounts[offer.type](item, quantity, offer);
    },
    0
  );
}
