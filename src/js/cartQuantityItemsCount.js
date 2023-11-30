export function cartQuantityItemsCount() {
  const YOUR_CART = JSON.parse(localStorage.getItem('cart'));

  const quantityItemsH = document.querySelector('.js-cart-quantity');
  const quantityItemsC = document.querySelector('.js-cart-quantity-big');

  if (!!quantityItemsH) {
    quantityItemsH.textContent = YOUR_CART.length;
  }
  if (!!quantityItemsC) {
    quantityItemsC.textContent = YOUR_CART.length;
  }
}
