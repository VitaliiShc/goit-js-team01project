import { cartPageRender } from './cart.js';

const cart = document.querySelector('.js-basket');

export function cartRemoveItem() {
  cart.addEventListener('click', e => {
    if (e.target.dataset.removeit) {
      const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
      const updatedCart = currentCart.filter(
        product => product._id !== e.target.dataset.removeit
      );

      localStorage.setItem('cart', JSON.stringify(updatedCart));
      cartPageRender(updatedCart);
    }
  });
}
