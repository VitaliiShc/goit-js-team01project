import { renderCartPage } from './cart.js';

export function cleartCart() {
  const cleatCartBtn = document.querySelector('.delete-all-btn');

  cleatCartBtn.addEventListener('click', () => {
    localStorage.setItem('cart', '[]');
    renderCartPage([]);
  });
}
