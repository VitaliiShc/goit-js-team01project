import axios from 'axios';

const refs = {
    popularList: document.querySelector('.popular_list'),
    popularCard: document.querySelector('.popular_card'),
    popularBtn: document.querySelector('.basket_button'),
};

const baseUrl = "https://food-boutique.b.goit.study/api/products/popular";

export async function getPopularItem() {
    try {
        const response = await axios.get(baseUrl);
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
        <div class="div_img">
            <img class="popular_photo" src="${img}" alt="No description" loading="lazy" width="56px" height="56px" data-id="${_id}"/>
        </div>
            <div class="info">
                <div class="info_name_button">
                    <p class="popular_item_name" data-id="${_id}">${name}</p>
                    <button class="basket_button" ></button>
                </div>
                    <p class="popular_description space" data-id="${_id}">Category: <span class="popular_description_info" data-id="${_id}">${category}</span></p>
                    <div class="info_decription">
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
        console.log(product);
    }
});

function getProductId(id) {
    const storedItems = JSON.parse(localStorage.getItem('popularItems')) || [];
    const find = storedItems.find(obj => obj['_id'] === id);
    return find;
    }
}
