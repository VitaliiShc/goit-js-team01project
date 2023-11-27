import axios from 'axios';

const refs = {
  // elements
  body: document.querySelector('body'),
  productItem: document.querySelector('.prod-item'),
  productList: document.querySelector('.list-prod'),
  addToCartBtn: document.querySelector('.buy-btn'),
};

// * get id of product

async function getProductById(id) {
  try {
    const BASE_API = 'https://food-boutique.b.goit.study/api';
    const END_POINT = `/products/${id}`;
    const url = `${BASE_API}${END_POINT}`;

    const response = await axios.get(url);
    const data = await response.data;
    return data;

  } catch (error) {
    console.error(error);
  }
}

// * open modal

refs.productList.addEventListener('click', async e => {
  if (e.target === refs.addToCartBtn) {
    console.log('Catr')
  } else if (e.target !== refs.productList) {
    console.log(e.target.dataset.id);
    e.preventDefault();
    const id = e.target.dataset.id;
    const data = await getProductById(id);
    renderPopup(data);

    const popupMain = document.getElementById('popap-main');
    const closeBtn = document.querySelector('.popup-main-close-btn');

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
  }
});

// ! render

function renderPopup(data) {
  const { category, desc, img, name, price, size, popularity } = data;
  console.log(data);
  const markup = `<div id="popap-main" class="popup-main">
  <div class="popup-main-content">
    <button class="popup-main-close-btn" type="button">
      X
    </button>
    <div class="popup-main-conteiner">
      <div class="popup-main-wrap">
        <img class="popup-main-photo" src="${img}" alt="photo" width="160" />
      </div>
      <div class="popup-main-text-conteiner">
        <p class="popup-main-title">${name}</p>
        <ul class="popup-main-list">
          <li class="popup-main-subtitles">
            <spun class="popup-subtitles-style">Category: </spun>${category}
          </li>
          <li class="popup-main-subtitles">
            <spun class="popup-subtitles-style">Size: </spun>${size}
          </li>
          <br />
          <li class="popup-main-subtitles">
            <spun class="popup-subtitles-style">Popularity: </spun>${popularity}
          </li>
        </ul>
        <p class="popup-main-text">${desc}</p>
      </div>
    </div>
    <div class="popup-main-footer">
      <p class="popup-main-price">$${price}</p>
      <button class="popup-main-add-btn" type="button">
        Add to Cart
      </button>
    </div>
  </div>
</div>
`;
  refs.body.insertAdjacentHTML('afterbegin', markup);
}

// ! close popup functions

function closeModal(popupMain) {
  popupMain.classList.add('is-hidden');
}