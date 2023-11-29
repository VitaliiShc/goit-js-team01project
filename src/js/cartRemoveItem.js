import { renderCartPage } from './cart.js';


export function cleartCart(YOUR_CART) {
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
