import basket from '../images/basket.png';
import basket2x from '../images/basket-2x.png';

export const emptyCartMarkup = `
    <picture>
      <source srcset="${basket} 1x, ${basket2x} 2x" />
      <img src="${basket}" alt="basket" class="basket-img" />
    </picture>
    <h3 class="basket-title">
      Your basket is <a href="./index.html" class="basket-title-link">empty...</a>
    </h3>
    <p class="basket-text">
      Go to the main page to select your favorite products and add them to the
      cart.
    </p>`;
