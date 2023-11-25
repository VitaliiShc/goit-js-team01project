import { getPopularItem, createMarkupPopular } from './js/popular';
import { getDiscountItem, createMarkupDiscount } from './js/discount';

getPopularItem()
  .then(response => createMarkupPopular(response))
  .catch(error => console.log(error));

getDiscountItem()
  .then(response => createMarkupDiscount(response))
  .catch(error => console.log(error));
