function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},o=n.parcelRequired7c6;function c(){const e={checkModalBtn:document.querySelector(".form-btn"),popupCart:document.querySelector(".popup-cart"),closeBtn:document.querySelector(".popup-cart-close-btn")};function t(){e.popupCart.classList.add("is-hidden"),window.removeEventListener("keydown",n)}function n(e){"Escape"===e.code&&t()}e.checkModalBtn.addEventListener("click",(t=>{t.preventDefault(),e.popupCart.classList.remove("is-hidden"),window.addEventListener("keydown",n)})),e.closeBtn.addEventListener("click",t),e.popupCart.addEventListener("click",(n=>{n.target===e.popupCart&&t()}))}null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},n.parcelRequired7c6=o),o.register("kyEFX",(function(t,n){var r,a;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},a=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("kyEFX").register(JSON.parse('{"feDGP":"cartpage.ecd052f3.js","6MAne":"basket.b33eb1ab.png","conrQ":"basket-2x.7099a48e.png","8OQ7p":"icons.7e50764c.svg"}'));var s;s=new URL(o("kyEFX").resolve("6MAne"),import.meta.url).toString();var i;i=new URL(o("kyEFX").resolve("conrQ"),import.meta.url).toString();const l=`\n    <picture class"empty-cart">\n      <source srcset="${t(s)} 1x, ${t(i)} 2x" />\n      <img src="${t(s)}" alt="basket" class="basket-img" />\n    </picture>\n    <h3 class="basket-title">\n      Your basket is <a href="./index.html" class="basket-title-link">empty...</a>\n    </h3>\n    <p class="basket-text">\n      Go to the main page to select your favorite products and add them to the\n      cart.\n    </p>`;var d;function u(e){let t=0;for(const n of e)t+=n.price;return t.toFixed(2)}function p(e){const n=`<div class="your-cart-container"><div class="delete-all">\n        <p class="delete-all-text">Delete all</p>\n            <button type="button" class="delete-all-btn">\n                <svg class="delete-all-icon">\n                    <use href="${t(d)}#icon-remove"></use>\n                </svg>\n            </button>\n    </div>\n    <ul class="your-cart-list">`+e.map((({category:e,img:n,name:r,price:a,size:o,_id:c})=>`<div class="cart-list-container"><li class="cart-product-card" data-product-id=${c}>\n        <div class="product-cart-container">\n            <img class="cart-product-img" src=${n} alt=${r} />\n            </div>\n            <div class="cart-product-card-discription">\n                <div class="cart-product-card-info">\n                    <p class="cart-product-name">${r}</p>\n                    <div class="cart-product-features">\n                        <p class="cart-product-category">Category: <span class="cart-product-category-span">${e}</span></p>\n                        <p class="cart-product-size">Size: <span class="cart-product-size-span">${o}</span></p>\n                    </div>\n                    <p class="cart-product-price">${a}</p>\n                </div>\n                <div class="cart-product-card-controls">\n                    <button class="remove-cart-item-btn" type="button" data-removeit=${c}>\n                        <svg class="remove-cart-item-icon" data-removeit=${c}>\n                            <use href="${t(d)}#icon-remove" data-removeit=${c}></use></use>\n                        </svg>\n                    </button>\n                    \x3c!-- <div class="counter"></div> --\x3e\n                </div>\n            </div>\n        </li>`)).join("")+`</ul>\n    </div>\n    <div class="order">\n        <h2 class="order-title">Your Order</h2>\n        <div class="order-total">\n            <p class="order-text-total">Total</p>\n            <div class="order-sum">\n                <p class="order-total-sum">\n                    <span class="order-text-sum">Sum: </span>&#36;${u(e)}</p>\n            </div>\n        </div>\n        <form class="form-input">\n            <input type="email" name="user-email" id="user-email" class="mail-input" placeholder="Enter your email" pattern="[_-a-zA-Z0-9.+]+@[a-zA-Z0-9](.?[-a-zA-Z0-9]*[a-zA-Z0-9])*" required/>\n            <button type="submit" class="form-btn">Checkout</button>\n        </form>\n    </div>\n    </div>`,r=document.querySelector(".form-btn");return console.log(r),n}function m(){const e=JSON.parse(localStorage.getItem("cart")),t=document.querySelector(".js-cart-quantity"),n=document.querySelector(".js-cart-quantity-big");t&&(t.textContent=e.length),n&&(n.textContent=e.length)}d=new URL(o("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const v=document.querySelector(".js-basket");const f=document.querySelector(".js-basket");function g(e){m(),0===e.length?f.innerHTML=l:(f.innerHTML=p(e),document.querySelector(".delete-all-btn").addEventListener("click",(()=>{localStorage.setItem("cart","[]"),g([])})),v.addEventListener("click",(e=>{if(e.target.dataset.removeit){const t=(JSON.parse(localStorage.getItem("cart"))||[]).filter((t=>t._id!==e.target.dataset.removeit));localStorage.setItem("cart",JSON.stringify(t)),g(t)}}))),c()}g(JSON.parse(localStorage.getItem("cart")));
//# sourceMappingURL=cartpage.ecd052f3.js.map