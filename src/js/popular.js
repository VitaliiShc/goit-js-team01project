import axios from 'axios';
import icons from '../images/icons.svg';
import { getProductById, renderPopup, closeModal } from './popup-main';
import { addToCart } from './addToCart';

const refs = {
  body: document.querySelector('body'),
  popularList: document.querySelector('.popular_list'),
  popularCard: document.querySelector('.popular_card'),
  popularBtn: document.querySelector('.basket_button'),
};

export async function getPopularItem() {
  try {
    const BASE_API = 'https://food-boutique.b.goit.study/api/products/popular';
    const url = `${BASE_API}`;
    const response = await axios.get(url);
    console.log(response.data);
    localStorage.setItem('popularItems', JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export function createMarkupPopular(response) {
  function isInCart(productId) {
    const cartProducts = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('ElemInCart', cartProducts);
    return cartProducts.some(product => product._id === productId);
  }


  const storedItems = JSON.parse(localStorage.getItem('popularItems')) || [];
  const markup = (response || storedItems)
    .map(({ _id, name, category, size, popularity, img, is10PercentOff }) => {
      const isInCartValue  = isInCart(_id); 

      const svgClass = isInCartValue ? 'check_popular' : 'cart-icon-popular';
      const iconClass = isInCartValue ? 'icon-check' : 'icon-cart';

      return `<li class="popular_card" data-id="${_id}">
      <svg class="discont-popular" width="30" height="30" style="visibility: ${onVisible(is10PercentOff)};">
            <use href="${icons}#icon-discount"></use>
      </svg>
        <div class="div_img" data-id="${_id}">
            <img class="popular_photo" src="${img}" alt="No description" loading="lazy" width="56px" height="56px" data-id="${_id}"/>
        </div>
            <div class="info" data-id="${_id}">
                <div class="info_name_button" data-id="${_id}">
                    <p class="popular_item_name" data-id="${_id}">${name}</p>
                    <button class="basket_button" id="${_id}" data-buythis="${_id}">
                    <svg class="${svgClass}" data-buythis="${_id}">
                        <use href="${icons}#${iconClass}" data-buythis="${_id}"/>
                    </svg>
                    </button>
                </div>
                    <p class="popular_description space" data-id="${_id}">Category: <span class="popular_description_info" data-id="${_id}">${category}</span></p>
                    <div class="info_decription" data-id="${_id}">
                    <p class="popular_description" data-id="${_id}">Size: <span class="popular_description_info" data-id="${_id}">${size}</span></p>
                    <p class="popular_description" data-id="${_id}">Popularity: <span class="popular_description_info" data-id="${_id}">${popularity}</span></p>
                    </div>
                </div>
        </li>`;
    })
    .join('');
  refs.popularList.insertAdjacentHTML('beforeend', markup);
}

function onVisible(is10PercentOff) {
  if (is10PercentOff === true) {
    return 'visible';
  } else return 'hidden';
}

refs.popularList.addEventListener('click', async e => {
  if (e.target !== refs.popularList && !e.target.dataset.buythis) {
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