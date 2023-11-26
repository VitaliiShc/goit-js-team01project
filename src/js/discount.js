import axios from 'axios';

const refs = {
    dicountList: document.querySelector('.discount_list')
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
        const { name, img, price } = limitedResponse[i];

        const markup = `<li class="discount_card">
                <div class="dicount_img_icon">
                    <img class="discount_photo" src="${img}" alt="No description" loading="lazy" width="114px" height="114px"/>
                    <span class="discount_icon"></span>
                </div>
                <div class="discount_info">
                    <p class="discount_product_name">${name}</p>
                    <p class="discount_product_price">${price}</p>
                    <button class=""></button>
                </div>
        </li>`;

        refs.dicountList.insertAdjacentHTML('beforeend', markup);
    }
}
