const refs = {
  checkModalBtn: document.querySelector('.check-btn'),
  popupCart: document.querySelector('.popup-cart'),
  closeBtn: document.querySelector('.popup-cart-close-btn'),
};

refs.checkModalBtn.addEventListener('click', e => {
  console.log('clic-1');
  e.preventDefault();
  refs.popupCart.classList.remove('is-hidden');

  window.addEventListener('keydown', clickByEscape);
});

refs.closeBtn.addEventListener('click', closeModal);

refs.popupCart.addEventListener('click', e => {
  console.log('click-3');
  e.preventDefault();
  if (e.target === refs.popupCart) {
    closeModal();
  }
});

function closeModal() {
  refs.popupCart.classList.add('is-hidden');
  window.removeEventListener('keydown', clickByEscape);
}

function clickByEscape(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}
