const basketCart = document.querySelector('.js-basket');
basketCart.innerHTML = `<div class="product-cart">
    <div class="delete-all">
        <p class="delete-all-text">Delete all</p>
        <button class="delete-all-btn">
            <svg class="delete-all-icon">
                <use href="./images/icons.svg#icon-remove"></use>
            </svg>
        </button>
    </div>
      <button class="delete-btn">
                <svg class="delete-icon">
                    <use href="./images/icons.svg#icon-remove"></use>
                </svg>
            </button>
    <ul class="product-list">
        <li class="product-item">
            <div class="product-cart-container">
                <img src="" alt="" class="product-cart-img" />
            </div>
            <div class="product-info">
                <h3 class="product-cart-title">Title</h3>
                <ul class="product-list-info">
                    <li class="product-info-item">
                        <p class="product-cart-category">Category:<span></span></p>
                    </li>
                    <li class="product-info-item">
                        <p class="'product-cart-size">Size:<span></span></p>
                    </li>
                </ul>
                <p class="product-price">1<span></span></p>
            </div>
          
        </li>
    </ul>
</div>


<div class="order">
<h2 class="order-title">Your Order</h2>
<div class="order-total">
    <p class="order-text-total">Total</p>
<div class="order-sum">
    <p class="order-text-sum">Sum:</p>
    <span class="order-total-sum">$12,94</span>
</div>
</div>
</div>
<form class="form-input">
    <input type="email" name="user-email" id="user-email" class="mail-input" placeholder="Enter your email" required />
    <button type="submit" class="form-btn">Checkout</button>
</form>`;
console.log(basketCart)




    // if (value === 0) {
    //     basketCart.classList.remove('.visually-hidden')
    // }

    // if (value !== 0) {
    //     basketCart.classList.add('.visually-hidden')
    // }



