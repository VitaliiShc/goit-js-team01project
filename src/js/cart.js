import { cartMarkupEmpty } from './cartMarkupEmpty.js';
import { cartMarkupFull } from './cartMarkupFull.js';
import { cartClear } from './cartClear.js';
import { cartQuantityItemsCount } from './cartQuantityItemsCount.js';
import { cartRemoveItem } from './cartRemoveItem.js';
import { cartOrderPost } from './cartOrderPost.js';


const cart = document.querySelector('.js-basket');
const YOUR_CART = JSON.parse(localStorage.getItem('cart'));

cartPageRender(YOUR_CART);

export function cartPageRender(YOUR_CART) {
  if (YOUR_CART.length === 0) {
    cart.innerHTML = cartMarkupEmpty;
  } else {
    cart.innerHTML = cartMarkupFull(YOUR_CART);

    cartClear(YOUR_CART);
    cartRemoveItem();
    cartQuantityItemsCount();
  }
  cartOrderPost();
}
