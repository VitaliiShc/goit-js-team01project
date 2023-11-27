import axios from 'axios';
import icons from '../images/icons.svg';

const refs = {
    body: document.querySelector('body'),
    popularList: document.querySelector('.popular_list'),
    popularCard: document.querySelector('.popular_card'),
    popularBtn: document.querySelector('.basket_button'),
};

export async function getPopularItem() {
    try {
        const BASE_API = "https://food-boutique.b.goit.study/api/products/popular";
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
    const markup = (response || storedItems).map(({ _id, name, category, size, popularity, img }) => {
        return `<li class="popular_card" data-id="${_id}">
        <div class="div_img" data-id="${_id}">
            <img class="popular_photo" src="${img}" alt="No description" loading="lazy" width="56px" height="56px" data-id="${_id}"/>
        </div>
            <div class="info" data-id="${_id}">
                <div class="info_name_button" data-id="${_id}">
                    <p class="popular_item_name" data-id="${_id}">${name}</p>
                    <button class="basket_button">
                    <svg class="cart-icon">
                        <use href="${icons}#icon-cart" class="pagination-arrows" />
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
    }).join('');
    refs.popularList.insertAdjacentHTML('beforeend', markup);
    refs.popularList.addEventListener('click', e => {
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
