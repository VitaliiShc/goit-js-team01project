import { emptyCartMarkup } from './cartMarkupEmpty.js';
import { cartMarkupFull } from './cartMarkupFull.js';
import { clearCart } from './cartClear.js';

const cart = document.querySelector('.js-basket');
const cartProductQuantity = document.querySelector('.quantity-carts');
const YOUR_CART = JSON.parse(localStorage.getItem('cart'));

renderCartPage(YOUR_CART);

export function renderCartPage(YOUR_CART) {
  if (YOUR_CART.length === 0) {
    cart.innerHTML = emptyCartMarkup;
  } else {
    cart.innerHTML = cartMarkupFull(YOUR_CART);
    clearCart(YOUR_CART);
  }
}


function clearCart(YOUR_CART) {
  const removeCartItemBtn = document.querySelector('.remove-cart-item-btn');

  removeCartItemBtn.addEventListener('click', e => {
    const YOUR_CART = JSON.parse(localStorage.getItem('cart'));
    const id = e.currentTarget.datast.productid;

    const getStorageId = YOUR_CART.find(el => el._id === id);
    console.log(getStorageId);

    const newCart = YOUR_CART.filter(el => el !== getStorageId);
    localStorage.setItem('cart', JSON.stringify(newCart));

    renderCartPage(YOUR_CART);
  });
}




// const removePopupBtn = document.querySelector('.popup-main-remove-btn');
// removeCartItemBtn.addEventListener('click', e => {
//   const id = e.target.id;
//   const getStorageId = YOUR_CART.find(el => el._id === id);
//   console.log(getStorageId);

//   const newCart = YOUR_CART.filter(el => el !== getStorageId);
//   localStorage.setItem('cart', JSON.stringify(newCart));
// });