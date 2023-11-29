import axios from 'axios';
import icons from '../images/icons.svg';
import { getProductById, renderPopup } from './popup-main'
// import { addToCart } from './addToCart';


const refs = {
    discountList: document.querySelector('.discount_list'),
    body: document.querySelector('body'),
}

const baseUrl = "https://food-boutique.b.goit.study/api/products/discount";

export async function getDiscountItem() {
    try {
        const response = await axios.get(baseUrl);
        console.log(response.data);
        localStorage.setItem('discountData', JSON.stringify(response.data));
        return response.data; 
    } catch (error) {
        console.log(error);
    }
}

export function createMarkupDiscount(response) {
    const limitedResponse = response.slice(0, 2);

    for (let i = 0; i < limitedResponse.length; i++) {
        const { _id, name, img, price } = limitedResponse[i];

        const markup = `<li class="discount_card" data-id="${_id}">
                <div class="dicount_img_icon" data-id="${_id}">
                    <img class="discount_photo" src="${img}" alt="No description" loading="lazy" width="114px" height="114px" data-id="${_id}">
                    <span class="discount_icon" data-id="${_id}">
                    <svg class="cart-icon-discount">
                        <use href="${icons}#icon-discount"/>
                    </svg>
                    </span>
                </div>
                <div class="discount_info" data-id="${_id}">
                    <p class="discount_product_name" data-id="${_id}">${name}</p>
                    <p class="discount_product_price" data-id="${_id}">${price}</p>
                    <button class="basket_button_discount" data-buythis="${_id}">
                    <svg class="cart-icon-discount" data-buythis="${_id}">
                        <use href="${icons}#icon-cart" class="pagination-arrows" data-buythis="${_id}"/>
                        <use href="${icons}#icon-cart" class="pagination-arrows" data-buythis="${_id}"/>
                    </svg>
                    </button>
                </div>
        </li>`;

        refs.discountList.insertAdjacentHTML('beforeend', markup);
    }
}


refs.discountList.addEventListener('click', async e => {
  if (e.target !== refs.discountList && !e.target.dataset.buythis) {
    console.log(e.target.dataset.id);
    e.preventDefault();
    const id = e.target.dataset.id;
    const data = await getProductById(id);
    renderPopupDiscound(data);
    const removeConteiner = document.querySelector('.popup-main-footer');
    const getStorageProduct = JSON.parse(localStorage.getItem('cart'));
    console.log(getStorageProduct);
    const getStorageId = getStorageProduct.find(el => el._id === id);
    if (getStorageId === undefined) {
      return;
    }
    if (getStorageId && getStorageId._id === id) {
      removeConteiner.textContent = '';
      const markup = `<p class="popup-main-price">$${getStorageId.price}</p>
      <button class="popup-main-remove-btn" type="button" id=${getStorageId._id}>
        Remove from<svg class="popup-main-icon">
        <use href="${icons}#icon-cart" />
        </svg>
      </button>`;
      removeConteiner.insertAdjacentHTML('afterbegin', markup);
    }
    }

 if (e.target.dataset.buythis) {
     console.log('add to cart');
     console.log('target', e.target.dataset.buythis);
    addToCartDiscound(e);
  }
});

function addToCartDiscound(event) {
  let buyingProd = event.target;
  let productId = buyingProd.dataset.buythis;
  console.log('productId', productId);

  const savedProduct1 = JSON.parse(localStorage.getItem('discountData'));
  console.log('savedProduct1', savedProduct1);

  const prodInCart = savedProduct1.find(option => option._id === productId);
  console.log('prodInCart', prodInCart);

  const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
  console.log('currentCart', currentCart);

  const productAlreadyInCart = currentCart.find(
    item => item._id === prodInCart._id
  );
  console.log('productAlreadyInCart', productAlreadyInCart);



  if (!productAlreadyInCart) {
    currentCart.push(prodInCart);
    localStorage.setItem('cart', JSON.stringify(currentCart));
  } 
}


function renderPopupDiscound(data) {
  if (!data) {
    return;
  }
  const { category, desc, img, name, price, size, popularity, _id } = data;
  console.log(data);
  const markup = `<div id="popap-main" class="popup-main">
  <div class="popup-main-content">
    <button class="popup-main-close-btn" type="button">
      <svg class="popup-main-close">
        <use href="${icons}#icon-remove" />
      </svg>
    </button>
    <div class="popup-main-conteiner">
      <div class="popup-main-wrap">
        <img class="popup-main-photo" src="${img}" alt="photo" width="160" />
      </div>
      <div class="popup-main-text-conteiner">
        <p class="popup-main-title">${name}</p>
        <ul class="popup-main-list">
          <li class="popup-main-subtitles">
            <span class="popup-subtitles-style">Category: </span>${category}
          </li>
          <li class="popup-main-subtitles">
            <span class="popup-subtitles-style">Size: </span>${size}
          </li>
          <br />
          <li class="popup-main-subtitles">
            <span class="popup-subtitles-style">Popularity: </span>${popularity}
          </li>
        </ul>
        <p class="popup-main-text">${desc}</p>
      </div>
    </div>
    <div class="popup-main-footer">
      <p class="popup-main-price">$${price}</p>
      <button class="popup-main-add-btn" type="button" data-buythis="${_id}">
        Add to <svg class="popup-main-icon">
        <use href="${icons}#icon-cart" />
        </svg>
      </button>
    </div>
  </div>
</div>
`;
  refs.body.insertAdjacentHTML('afterbegin', markup);
  document.body.classList.add('no-scroll');

  const popupMain = document.getElementById('popap-main');
  const closeBtn = document.querySelector('.popup-main-close-btn');
  const addToCartBtn = document.querySelector('.popup-main-add-btn');
  const removeConteiner = document.querySelector('.popup-main-footer');

  // * close modal by Button - X
  closeBtn.addEventListener('click', () => {
    closeModal(popupMain);
  });
  // * close modal by Dropbox
  popupMain.addEventListener('click', e => {
    if (e.target === popupMain) {
      closeModal(popupMain);
    }
  });
  // * close modal by Escape
  window.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      closeModal(popupMain);
    }
  });
  // * add to cart btn listener
  addToCartBtn.addEventListener('click', e => {
    addToCartDiscound(e);
    removeConteiner.textContent = '';
    const markup = `<p class="popup-main-price">$${price}</p>
      <button class="popup-main-remove-btn" type="button" id=${_id}>
        Remove from<svg class="popup-main-icon">
        <use href="${icons}#icon-cart" />
        </svg>
      </button>`;
    removeConteiner.insertAdjacentHTML('afterbegin', markup);
    const getStorageProduct = JSON.parse(localStorage.getItem('cart'));
    console.log(getStorageProduct);
  });
}


function closeModal(popupMain) {
  popupMain.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
}
