import axios from 'axios';
const axiosFirst = axios.create({
  baseURL: 'https://food-boutique.b.goit.study/api/products',
  params: {
    page: '1',
    limit: '540',
  },
});
export class searchFirstAPI {
  async getFirstSearch(page, limit) {
    try {
      const res = await axiosFirst.get('', {
        params: { page: page, limit: limit },
      });
      // return res.data;
      localStorage.setItem('res.data', JSON.stringify(res.data.results));
      // added - replace function execution
      createFirst();
      const buyClick = document.querySelectorAll('.buy-btn');
      buyClick.forEach(button => {
        button.addEventListener('click', addToCart);
      });
      // end of editing
    } catch (error) {
      throw error;
    }
  }
}
const apiInstance = new searchFirstAPI();
const page = 1;
const limit = 540;
apiInstance
  .getFirstSearch(page, limit)
  .then(() => {
  })
  .catch(error => {
  });
let screenWidth = window.innerWidth;
export let limitProd = findLimitProd(screenWidth);
// console.log(limitProd);
let pageProd = 1;
export function findLimitProd(screenWidth) {
  if (screenWidth < 768) {
    return 6;
  } else if (screenWidth >= 768 && screenWidth < 1280) {
    return 8;
  } else {
    return 9;
  }
}
function handleResize() {
  const newScreenWidth = window.innerWidth;
  const newLimitProd = findLimitProd(newScreenWidth);
  if (newLimitProd !== limitProd) {
    limitProd = newLimitProd;
    createFirst();
  }
}
window.addEventListener('resize', handleResize);
export function createFirst(currentPage) {
  // console.log(currentPage);
  const savedProduct = localStorage.getItem('res.data');
  const parseItem = JSON.parse(savedProduct);
  const productsList = document.querySelector('.list-prod');
  productsList.innerHTML = '';
  let firstElOnPage;
  let limitтNumberProd;
  if (isNaN((page - 1) * limit)) {
    firstElOnPage = 0;
  } else {
    firstElOnPage = (page - 1) * limit;
  }
  limitтNumberProd = +pageProd * +limitProd;
  // console.log(firstElOnPage);
  // console.log(limitтNumberProd);
  try {
    const dataItems = parseItem;
    if (currentPage >= 2) {
      let pageCounter = (currentPage - 1) * 8;
      const itemsToDisplay = dataItems.slice(
        firstElOnPage + pageCounter,
        limitтNumberProd + pageCounter
      );
      for (let i = 0; i < itemsToDisplay.length; i += 1) {
        const markup = creatMarkupProd(itemsToDisplay[i]);
        productsList.insertAdjacentHTML('beforeend', markup);
      }
    } else if (dataItems && dataItems.length > 0) {
      const itemsToDisplay = dataItems.slice(firstElOnPage, limitтNumberProd);
      for (let i = 0; i < itemsToDisplay.length; i += 1) {
        const markup = creatMarkupProd(itemsToDisplay[i]);
        productsList.insertAdjacentHTML('beforeend', markup);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
export function creatMarkupProd(item) {
  const { _id, category, name, img, price, size, is10PercentOff, popularity } =
    item;
  const nameWithSpace = name.replace(/_/g, ' ');
  const categoryWithSpace = category.replace(/_/g, ' ');
  return `<li class="prod-item" data-id=${_id}>
                <div class="prod-pic" data-id=${_id}>
                  <svg class="discont-prod" width="60" height="60" style="visibility: ${onVisible(
                    is10PercentOff
                  )};">
                    <use href="icons.svg#icon-cart"></use>
                  </svg>
                  <img class="prod-img" src="${img}" alt="${name}" loading="lazy" data-id=${_id} />
                </div>
                <h3 class="title-prod" data-id=${_id}>${nameWithSpace}</h3>
                <div class="feature" data-id=${_id}>
                  <p class="feature-prod" data-id=${_id}>Category:<span class="feature-value" data-id=${_id}>${categoryWithSpace}</span></p>
                  <p class="feature-prod" data-id=${_id}>Size:<span class="feature-value" data-id=${_id}>${size}</span></p>
                  <p class="feature-prod push" data-id=${_id}>Popularity:<span class="feature-value" data-id=${_id}>${popularity}</span></p>
                </div>
                <div class="buing-prod" data-id=${_id}>
                  <p class="price-prod" data-id=${_id}>$${price}</p>
                  <button class="buy-btn" type="button" id=${_id}>
                      <svg class="buy-svg" width="18" height="18">
                        <use href="icons.svg#icon-cart"></use>
                      </svg>
                </button>
                </div>
            </li>`;
}
function onVisible(is10PercentOff) {
  if (is10PercentOff === true) {
    return 'visible';
  } else return 'hidden';
}
// createFirst();
// add to cart
const cartValue = localStorage.getItem('cart');
if (cartValue !== null) {
} else {
  localStorage.setItem('cart', JSON.stringify([]));
}

// const buyClick = document.querySelectorAll('.buy-btn');
// buyClick.forEach(button => {
//   button.addEventListener('click', addToCart);
// });

function addToCart(event) {
  let buyingProd = event.currentTarget;
  let productId = buyingProd.id;
  console.log(productId);

  const savedProduct1 = JSON.parse(localStorage.getItem('res.data'));
  const prodInCart = savedProduct1.find(option => option._id === productId);
  const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
  const productAlreadyInCart = currentCart.find(
    item => item._id === prodInCart._id
  );
  if (!productAlreadyInCart) {
    currentCart.push(prodInCart);
    localStorage.setItem('cart', JSON.stringify(currentCart));
  } else {
  }
}
