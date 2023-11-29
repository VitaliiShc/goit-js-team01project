import icons from '../images/icons.svg';
import { cartTotalPrice } from './cartTotalPrice';

export function cartMarkupFull(YOUR_CART) {
  const markupFullCart =
    `<div class="delete-all">
        <p class="delete-all-text">Delete all</p>
            <button type="button" class="delete-all-btn">
                <svg class="delete-all-icon">
                    <use href="${icons}#icon-remove"></use>
                </svg>
            </button>
    </div>
    <ul class="your-cart-list">` +
    YOUR_CART.map(
      ({ category, img, name, price, size, _id }) =>
        `<li class="cart-product-card" data-product-id=${_id}>
            <img class="cart-product-img" src=${img} alt=${name} />
            <div class="cart-product-card-discription">
                <div class="cart-product-card-info">
                    <p class="cart-product-name">${name}</p>
                    <div class="cart-product-features">
                        <p class="cart-product-category">Category: <span>${category}</span></p>
                        <p class="cart-product-size">Size: <span>${size}</span></p>
                    </div>
                    <p class="cart-product-price">${price}</p>
                </div>
                <div class="cart-product-card-controls">
                    <button class="remove-cart-item-btn" data-productid=${_id} type="button"><svg class="remove-cart-item-icon"><use href="${icons}#icon-remove"></use>/svg></button>
                    <!-- <div class="counter"></div> -->
                </div>
            </div>
        </li>`
    ).join('') +
    `</ul>
    <div class="order">
        <h2 class="order-title">Your Order</h2>
        <div class="order-total">
            <p class="order-total">Total</p>
            <div class="order-sum">
                <p class="order-total-sum">
                    <span class="order-text-sum">Sum: </span>&#36;${cartTotalPrice(
                      YOUR_CART
                    )}</p>
            </div>
        </div>
        <form class="form-input">
            <input type="email" name="user-email" id="user-email" class="mail-input" placeholder="Enter your email" pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}" required/>
            <button type="submit" class="form-btn">Checkout</button>
        </form>
    </div>`;

  return markupFullCart;
}
