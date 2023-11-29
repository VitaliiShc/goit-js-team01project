import { cartPageRender } from './cart.js';
import { cartQuantityItemsCount } from './cartQuantityItemsCount.js';

export function cartClear() {
  const cleatCartBtn = document.querySelector('.delete-all-btn');

  cleatCartBtn.addEventListener('click', () => {
    localStorage.setItem('cart', '[]');
    cartPageRender([]);
    cartQuantityItemsCount();
  });
}
