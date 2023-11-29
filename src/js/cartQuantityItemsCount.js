export function cartQuantityItemsCount() {
    const quantityItems = document.querySelector('.js-cart-quantity-items');
const YOUR_CART = JSON.parse(localStorage.getItem('cart'));
console.log(YOUR_CART);
    // const quantityItems = YOUR_CART  ?? []
    quantityItems.textContent = YOUR_CART.length
    //  quantityItems.innerHTML=YOUR_CART.length
   console.log(YOUR_CART.length);
    return quantityItems;
}


