import { getPopularItem, createMarkupPopular } from './popular.js';
import { getDiscountItem, createMarkupDiscount } from './discount.js';
import { cartQuantityItemsCount } from './cartQuantityItemsCount.js';

cartQuantityItemsCount();

getPopularItem()
  .then(response => createMarkupPopular(response))
  .catch(error => console.log(error));

getDiscountItem()
  .then(response => createMarkupDiscount(response))
  .catch(error => console.log(error));
