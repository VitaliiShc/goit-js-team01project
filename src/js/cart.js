import { cartMarkupEmpty } from './cartMarkupEmpty.js';
import { cartMarkupFull } from './cartMarkupFull.js';
import { cartClear } from './cartClear.js';

const cart = document.querySelector('.js-basket');
// const cartProductQuantity = document.querySelector('.quantity-carts');
const YOUR_CART = JSON.parse(localStorage.getItem('cart'));

renderCartPage(YOUR_CART);

export function renderCartPage(YOUR_CART) {
  if (YOUR_CART.length === 0) {
    cart.innerHTML = cartMarkupEmpty;
  } else {
    cart.innerHTML = cartMarkupFull(YOUR_CART);
    cartClear(YOUR_CART);
  }
}
