import { emptyCartMarkup } from './cartMarkupEmpty.js';
import { cartMarkupFull } from './cartMarkupFull.js';

const cart = document.querySelector('.js-basket');
const cartProductQuantity = document.querySelector('.quantity-carts');
const YOUR_CART = JSON.parse(localStorage.getItem('cart'));

renderPage(YOUR_CART);

function renderPage(YOUR_CART) {
  if (YOUR_CART.length === 0) {
    cart.innerHTML = emptyCartMarkup;
  } else {
    cart.innerHTML = cartMarkupFull(YOUR_CART);
  }
}
