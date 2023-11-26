let screenWidth = window.innerWidth;
let limitProd = findLimitProd(screenWidth);
let pageProd = 1;

function findLimitProd(screenWidth) {
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

function createFirst() {
  const savedProduct = localStorage.getItem('res.data');
  const parseItem = JSON.parse(savedProduct);
  const productsList = document.querySelector('.list-prod');
  productsList.innerHTML = '';
  firstElOnPage = (pageProd - 1) * limitProd;
  limitтNumberProd = +pageProd * +limitProd;
  console.log(firstElOnPage);
  console.log(limitтNumberProd);
  try {
    const dataItems = parseItem;
    if (dataItems && dataItems.length > 0) {
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

function creatMarkupProd(item) {
  const { category, name, img, price, size, is10PercentOff, popularity, _id } = item;
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
                  <button class="buy-btn" type="button">
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

createFirst();
