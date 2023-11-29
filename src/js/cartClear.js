import { renderCartPage } from './cart.js';

export function cartClear() {
  const cleatCartBtn = document.querySelector('.delete-all-btn');

  cleatCartBtn.addEventListener('click', () => {
    localStorage.setItem('cart', '[]');
    renderCartPage([]);
  });
}
