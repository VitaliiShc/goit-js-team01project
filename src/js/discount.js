import axios from 'axios';
import icons from '../images/icons.svg';
import {getProductById, renderPopup} from './popup-main'

const refs = {
    discountList: document.querySelector('.discount_list')
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
                    <button class="basket_button_discount">
                    <svg class="cart-icon-discount">
                        <use href="${icons}#icon-cart" class="pagination-arrows" />
                    </svg>
                    </button>
                </div>
        </li>`;

        refs.discountList.insertAdjacentHTML('beforeend', markup);
    }
}

refs.discountList.addEventListener('click', e => {
    const id = e.target.dataset.id;
    if (id) {
        const product = getProductId(id);
        // console.log(product);
    }
});

function getProductId(id) {
    const storedItems = JSON.parse(localStorage.getItem('discountData')) || [];
    const find = storedItems.find(obj => obj['_id'] === id);
    return find;
}




refs.discountList.addEventListener('click', async e => {
    if (e.target !== refs.discountList) {
        console.log(e.target.dataset.id);
        e.preventDefault();
        const id = e.target.dataset.id;
        const data = await getProductById(id);
        renderPopup(data);
    }
});
