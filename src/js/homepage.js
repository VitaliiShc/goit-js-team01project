import { getPopularItem, createMarkupPopular } from './popular.js';
import { getDiscountItem, createMarkupDiscount } from './discount.js';

getPopularItem()
  .then(response => createMarkupPopular(response))
  .catch(error => console.log(error));

getDiscountItem()
  .then(response => createMarkupDiscount(response))
  .catch(error => console.log(error));
