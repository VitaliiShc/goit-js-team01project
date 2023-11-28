import axios from 'axios';
import icons from '../images/icons.svg';
import { getProductById, renderPopup } from './popup-main';
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
  const storedItems = JSON.parse(localStorage.getItem('popularItems')) || [];
  const markup = (response || storedItems)
    .map(({ _id, name, category, size, popularity, img }) => {
      return `<li class="popular_card" data-id="${_id}">
        <div class="div_img" data-id="${_id}">
            <img class="popular_photo" src="${img}" alt="No description" loading="lazy" width="56px" height="56px" data-id="${_id}"/>
        </div>
            <div class="info" data-id="${_id}">
                <div class="info_name_button" data-id="${_id}">
                    <p class="popular_item_name" data-id="${_id}">${name}</p>
                    <button class="basket_button js_add_to_cart" id="${_id}" data-buythis="${_id}">
                    <svg class="cart-icon js_add_to_cart" data-buythis="${_id}">
                        <use href="${icons}#icon-cart" class="js_add_to_cart" data-buythis="${_id}"/>
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
  //   refs.popularBtn.addEventListener('click', addToCart);
  refs.popularList.addEventListener('click', e => {
    // if (e.target.classList.contains('basket_button')) {
    //   console.log('це едд ту карт');
    // }
    const id = e.target.dataset.id;
    if (id) {
      const product = getProductId(id);
      // console.log(product);
    }
  });

  function getProductId(id) {
    const storedItems = JSON.parse(localStorage.getItem('popularItems')) || [];
    const find = storedItems.find(obj => obj['_id'] === id);
    return find;
  }
}

refs.popularList.addEventListener('click', async e => {
  console.log('currentTarget', e.currentTarget);
  console.log('target', e.target);
  console.log('dataset', e.target.dataset.buythis);

  if (e.target !== refs.popularList && !e.target.dataset.buythis) {
    e.preventDefault();
    console.log('выдкривааэмо модалку');
    const id = e.target.dataset.id;
    const data = await getProductById(id);
    renderPopup(data);
  } else if (e.target.dataset.buythis) {
    console.log('add to cart');
    addToCart(e);
  }
});
