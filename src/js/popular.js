import axios from 'axios';

const refs = {
    popularList: document.querySelector('.popular_list')
}

const baseUrl = "https://food-boutique.b.goit.study/api/products/popular";

export async function getPopularItem() {
    try {
        const response = await axios.get(baseUrl);
        console.log(response.data);
        return response.data; 
    } catch (error) {
        console.log(error);
    }
}

export function createMarkupPopular(response) { 
    const markup = response.map(({ name, category, size, popularity, img }) => {
        return `<li class="popular_card">
        <div class="div_img">
            <img class="popular_photo" src="${img}" alt="No description" loading="lazy" width="56px" height="56px"/>
        </div>
            <div class="info">
                <div class="info_name_button">
                    <p class="popular_item_name">${name}</p>
                </div>
                    <p class="popular_description space">Category: <span class="popular_description_info">${category}</span></p>
                    <div class="info_decription">
                    <p class="popular_description">Size: <span class="popular_description_info">${size}</span></p>
                    <p class="popular_description">Popularity: <span class="popular_description_info">${popularity}</span></p>
                    </div>
                </div>
        </li>`;
    }).join('');
    refs.popularList.insertAdjacentHTML('beforeend', markup);
}