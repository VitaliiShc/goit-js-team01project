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
        <div class="div_img">
            <img class="popular_photo" src="${img}" alt="No description" loading="lazy" width="56px" height="56px" data-id="${_id}"/>
        </div>
            <div class="info">
                <div class="info_name_button">
                    <p class="popular_item_name" data-id="${_id}">${name}</p>
                    <button class="basket_button">
                    <svg class="cart-icon">
                        <use href="${icons}#icon-cart" class="pagination-arrows" />
                    </svg>
                    </button>
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

// refs.popularList.addEventListener('click', async e => {
//     if (e.target.classList.contains('basket_button')) {
//         console.log('Cart');
//     } else if (e.target !== refs.popularList) {
//         console.log(e.target.dataset.id);
//         e.preventDefault();
//         const id = e.target.dataset.id;
//         const data = await getProductId(id);
//         renderPopup(data);
//     }
// });

// function renderPopup(data) {
//     if (!data) {
//         console.log('No data');
//         return;
//     }
//     const { category, desc, img, name, price, size, popularity } = data;
//     console.log(data);
//     const markup = `<div id="popap-main" class="popup-main">
//   <div class="popup-main-content">
//     <button class="popup-main-close-btn" type="button">
//       X
//     </button>
//     <div class="popup-main-conteiner">
//       <div class="popup-main-wrap">
//         <img class="popup-main-photo" src="${img}" alt="photo" width="160" />
//       </div>
//       <div class="popup-main-text-conteiner">
//         <p class="popup-main-title">${name}</p>
//         <ul class="popup-main-list">
//           <li class="popup-main-subtitles">
//             <span class="popup-subtitles-style">Category: </span>${category}
//           </li>
//           <li class="popup-main-subtitles">
//             <span class="popup-subtitles-style">Size: </span>${size}
//           </li>
//           <br />
//           <li class="popup-main-subtitles">
//             <span class="popup-subtitles-style">Popularity: </span>${popularity}
//           </li>
//         </ul>
//         <p class="popup-main-text">${desc}</p>
//       </div>
//     </div>
//     <div class="popup-main-footer">
//       <p class="popup-main-price">$${price}</p>
//       <button class="popup-main-add-btn" type="button">
//         Add to Cart
//       </button>
//     </div>
//   </div>
// </div>
// `;
//     refs.body.insertAdjacentHTML('afterbegin', markup);

//     const popupMain = document.getElementById('popap-main');
//     const closeBtn = document.querySelector('.popup-main-close-btn');
//     const sddToCartBtn = document.querySelector('.popup-main-add-btn');

//     // * close modal by Button - X
//     closeBtn.addEventListener('click', () => {
//         closeModal(popupMain);
//     });
//     // * close modal by Dropbox
//     popupMain.addEventListener('click', e => {
//         if (e.target === popupMain) {
//             closeModal(popupMain);
//         }
//     });
//     // * close modal by Escape
//     window.addEventListener('keydown', e => {
//         if (e.code === 'Escape') {
//             closeModal(popupMain);
//         }
//     });
// }

// function closeModal(popupMain) {
//     popupMain.classList.add('is-hidden');
// }