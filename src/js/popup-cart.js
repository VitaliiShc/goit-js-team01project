import { cartMarkupEmpty } from './cartMarkupEmpty.js';
import { cartMarkupFull } from './cartMarkupFull.js';
import { cartClear } from './cartClear.js';
import { cartQuantityItemsCount } from './cartQuantityItemsCount.js';
import { cartRemoveItem } from './cartRemoveItem.js';
import { cartOrderPost } from './cartOrderPost.js';
import { cartPageRender } from './cart.js';

const refs = {
  checkModalBtn: document.querySelector('.check-btn'),
  popupCart: document.querySelector('.popup-cart'),
  closeBtn: document.querySelector('.popup-cart-close-btn'),
};

refs.checkModalBtn.addEventListener('click', e => {
  e.preventDefault();
  localStorage.setItem('cart', '[]');
  refs.popupCart.classList.remove('is-hidden');

  cartPageRender();
  window.addEventListener('keydown', closeByEscape);
});

refs.closeBtn.addEventListener('click', closeModal);

refs.popupCart.addEventListener('click', e => {
  if (e.target === refs.popupCart) {
    closeModal();
  }
});

function closeModal() {
  refs.popupCart.classList.add('is-hidden');
  window.removeEventListener('keydown', closeByEscape);
}

function closeByEscape(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}
