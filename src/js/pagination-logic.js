import { searchFirstAPI } from './firstGet.js';
import { pagination } from './pagination.js';
import { createFirst } from './firstProdGet.js';
import { limitProd } from './firstProdGet.js';
import icons from '../images/icons.svg';

export function pagination() {
  const productUl = document.querySelector('.list-prod');

  const itemProduct = JSON.parse(localStorage.getItem('res.data'));
  const resDataElem = itemProduct.length;

  pagination.on('afterMove', event => {
    const currentPage = event.page;
    // console.log(currentPage);
    createFirst(currentPage);
  });

  let itemsPerPage = limitProd;
  pagination.setItemsPerPage(itemsPerPage);

  const optionsString = localStorage.getItem('options');
  const options = JSON.parse(optionsString);
  let keyword = options.keyword;
  let category = options.category;
  // console.log(keyword);
  // console.log(category);

  //==============  VS this function sed in filters logic

  function categoriesFilter(keyword, category) {
    const productsArray = JSON.parse(localStorage.getItem('products'));
    // console.log('Array', productsArray);
    const elements = productsArray.length;
    // console.log(elements);

    if (keyword === null && category === null) {
      pagination.reset(resDataElem);
      createFirst();
      // console.log('hello', elements);
    } else if (keyword !== null || category !== null) {
      // console.log('mango', productsArray);
      // console.log('Elements', itemsPerPage);
      creatFiltredProduct(productsArray);
      // console.log('Функція виконалась');
      pagination.reset(elements);
      // console.log('El', elements);
    }
  }
  categoriesFilter(keyword, category);

  //==============VS

  function creatFiltredProduct(productsArray) {
    const markup = productsArray
      .map(
        ({
          _id,
          category,
          name,
          img,
          price,
          size,
          is10PercentOff,
          popularity,
        }) => {
          return `<li class="prod-item" data-id=${_id}>
                <div class="prod-pic" data-id=${_id}>
                  <svg class="discont-prod" width="60" height="60" style="visibility: ${onVisible(
                    is10PercentOff
                  )};">
                    <use href="${icons}.svg#icon-discount"></use>
                  </svg>
                  <img class="prod-img" src="${img}" alt="${name}" loading="lazy" data-id=${_id} />
                </div>
                <h3 class="title-prod" data-id=${_id}>${name}</h3>
                <div class="feature" data-id=${_id}>
                  <p class="feature-prod" data-id=${_id}>Category:<span class="feature-value" data-id=${_id}>${category}</span></p>
                  <p class="feature-prod" data-id=${_id}>Size:<span class="feature-value" data-id=${_id}>${size}</span></p>
                  <p class="feature-prod push" data-id=${_id}>Popularity:<span class="feature-value" data-id=${_id}>${popularity}</span></p>
                </div>
                <div class="buing-prod" data-id=${_id}>
                  <p class="price-prod" data-id=${_id}>$${price}</p>
                  <button class="buy-btn" type="button" id=${_id}>
                      <svg class="buy-svg" width="18" height="18">
                        <use href="${icons}.svg#icon-cart"></use>
                      </svg>
                </button>
                </div>
            </li>`;
        }
      )
      .join('');
    productUl.innerHTML = markup;
  }

  function onVisible(is10PercentOff) {
    if (is10PercentOff === true) {
      return 'visible';
    } else return 'hidden';
  }
}
