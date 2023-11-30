import axios from 'axios';
import icons from '../images/icons.svg';
import { getProductById, renderPopup, closeModal } from './popup-main'
import { addToCart } from './addToCart';


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
    renderPopup(data);

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

       const removePopupBtn = document.querySelector('.popup-main-remove-btn');
      removePopupBtn.addEventListener('click', e => {
        const id = e.target.id;
        const getStorageId = getStorageProduct.find(el => el._id === id);
        console.log(getStorageId);
        const newCart = getStorageProduct.filter(el => el !== getStorageId);
        localStorage.setItem('cart', JSON.stringify(newCart));
        removeConteiner.textContent = '';
        const markup = `<p class="popup-main-price">$${getStorageId.price}</p>
      <button class="popup-main-add-btn" type="button" id=${getStorageId._id}>
        Add to<svg class="popup-main-icon">
        <use href="${icons}#icon-cart" />
        </svg>
      </button>`;
        removeConteiner.insertAdjacentHTML('afterbegin', markup);
        const popupMain = document.getElementById('popap-main');
        closeModal(popupMain);
      });
    }
    }

    if (e.target.dataset.buythis) {
    addToCart(e);
  }
});
