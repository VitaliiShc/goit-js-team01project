import { cartPageRender } from './cart.js';


export function cartClear(YOUR_CART) {
  const removeCartItemBtn = document.querySelector('.remove-cart-item-btn');
  

  removeCartItemBtn.addEventListener('click', e => {
    const YOUR_CART = JSON.parse(localStorage.getItem('cart'));
    const id = e.currentTarget.datast.productid;

    const getStorageId = YOUR_CART.find(el => el._id === id);
    console.log(getStorageId);

    const newCart = YOUR_CART.filter(el => el !== getStorageId);
    localStorage.setItem('cart', JSON.stringify(newCart));

    cartPageRender(YOUR_CART);
  });
}



// function cartClear(YOUR_CART) {
//   const removeCartItemBtn = document.querySelector('.remove-cart-item-btn');

//   removeCartItemBtn.addEventListener('click', e => {
//     const YOUR_CART = JSON.parse(localStorage.getItem('cart'));
//     const id = e.currentTarget.datast.productid;

//     const getStorageId = YOUR_CART.find(el => el._id === id);
//     console.log(getStorageId);

//     const newCart = YOUR_CART.filter(el => el !== getStorageId);
//     localStorage.setItem('cart', JSON.stringify(newCart));

//     cartPageRender(YOUR_CART);
//   });
// }




// const removePopupBtn = document.querySelector('.popup-main-remove-btn');
// removeCartItemBtn.addEventListener('click', e => {
//   const id = e.target.id;
//   const getStorageId = YOUR_CART.find(el => el._id === id);
//   console.log(getStorageId);

//   const newCart = YOUR_CART.filter(el => el !== getStorageId);
//   localStorage.setItem('cart', JSON.stringify(newCart));
// });