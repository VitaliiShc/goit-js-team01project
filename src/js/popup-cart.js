const refs = {
  checkModalBtn: document.querySelector('.check-btn'),
  popupCart: document.querySelector('.popup-cart'),
  closeBtn: document.querySelector('.popup-cart-close-btn'),
};

refs.checkModalBtn.addEventListener('click', e => {
  console.log('clic-1')
  e.preventDefault();
  refs.popupCart.classList.remove('is-hidden');
})

refs.closeBtn.addEventListener('click', e => {
  console.log('click-2');
  e.preventDefault();
  refs.popupCart.classList.add('is-hidden');
})

refs.popupCart.addEventListener('click', e => {
  console.log('click-3')
  e.preventDefault();
  if (e.target === refs.popupCart) {
    refs.popupCart.classList.add('is-hidden');
  }
})

document.addEventListener('keyup', e => {
  console.log('click-4');
  e.preventDefault();
  if (e.key === 'Escape') {
    refs.popupCart.classList.add('is-hidden');
    document.removeEventListener('keyup', e)
  }
})


