export function cartOrderPost() {
  const refs = {
    checkModalBtn: document.querySelector('.form-btn'),
    popupCart: document.querySelector('.popup-cart'),
    closeBtn: document.querySelector('.popup-cart-close-btn'),
  };

  refs.checkModalBtn.addEventListener('click', e => {
    e.preventDefault();
    refs.popupCart.classList.remove('is-hidden');
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
}
