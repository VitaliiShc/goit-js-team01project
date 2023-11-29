export function cartQuantityItemsCount() {
  const quantityItemsH = document.querySelector('.js-cart-quantity');
  const quantityItemsC = document.querySelector('.js-cart-quantity');

  const YOUR_CART = JSON.parse(localStorage.getItem('cart'));
  
  quantityItemsH.textContent = YOUR_CART.length;
  quantityItemsC.textContent = YOUR_CART.length;


  // const quantityItems = YOUR_CART  ?? []
  //   quantityItems.textContent = YOUR_CART.length;
  // quantityItemsH.textContent = YOUR_CART.length;

  // console.log('length', YOUR_CART.length);
  // return quantityItemsH;
}


// function cartQuantityItemsCount() {
//   // ----- header



  

//   // const quantityItemsC = document.querySelector('#value');

//   // console.log(quantityItemsH);

//   // console.log(YOUR_CART);
//   // const quantityItems = YOUR_CART  ?? []
//   // quantityItemsH.innerHTML = `${YOUR_CART.length}`;

//   // quantityItemsH.innerHTML = `${YOUR_CART.length}`;

//   // console.log('length', YOUR_CART.length);

//   // return quantityItemsH;
// }

