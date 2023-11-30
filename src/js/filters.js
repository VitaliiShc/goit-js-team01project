import { FoodApi } from './api.js';
import { LocalStorage } from './local-storage.js';
import { categoriesFilter } from './pagination-logic.js';
import { pagination } from './pagination.js';
import { limitProd, creatMarkupProd, createFirst } from './firstProdGet.js';
const productList = document.querySelector('.list-prod');
const submitForm = document.querySelector('.submit-form');
const select = document.querySelector('.categories');
// Дефолтные значение в хранилище
// document.addEventListener('DOMContentLoaded', () => {
//   localStorageManager.defaultApiOptions();
// });

const foodApi = new FoodApi();
const localStorageManager = new LocalStorage();
// толкаем в селект

foodApi.getCategories().then(categories => {
  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = 'Categories';
  defaultOption.disabled = true;
  defaultOption.selected = true;
  select.appendChild(defaultOption);

  // select.addEventListener('click', function () {
  //   defaultOption.classList.add('hidden');
  // });

  categories.forEach(category => {
    defaultOption.classList.add('hidden');
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    select.appendChild(option);
  });

  const showAllOption = createShowAllOption();
  select.appendChild(showAllOption);
});

function createShowAllOption() {
  const showAllOption = document.createElement('option');
  showAllOption.textContent = 'Show All';
  showAllOption.value = 'show-all';
  return showAllOption;
}

// Выбор категории
// select.addEventListener('change', async function () {
// const selectedItem = select.value;

//   try {

// let options = JSON.parse(localStorage.getItem('options')) || {};
//     if (selectedItem === 'show-all') {

//         localStorageManager.defaultApiOptions();
//         const data = await foodApi.getFoodList();
//         localStorageManager.updateLocalStorageWithFoodList(data, options);
//     } else {
//       options.category = selectedItem;
//       foodApi.category = selectedItem;
//       const data = await foodApi.getFoodList();
//       localStorageManager.updateLocalStorageWithFoodList(data, options);
//     }
//   }
//     catch (error) {
//     console.error('Error fetching food list:', error.message);
//   }
// });

// // Сабмит
// submitForm.addEventListener('submit', async event => {
//     event.preventDefault();
//     const searchValue = event.target.elements.search.value;
//   console.log('Search Value:', searchValue);

//     try {
//       let options = JSON.parse(localStorage.getItem('options')) || {};
//       options.keyword = searchValue;
//       options.keyword = searchValue !== '' ? searchValue : null;

//       foodApi.searchQuery = searchValue;
//       console.log('foodApi.searchQuery:', foodApi.searchQuery);

//       const data = await foodApi.getFoodList();

//       localStorageManager.updateLocalStorageWithFoodList(data, options);
//     } catch (error) {
//       console.error('Error fetching food list:', error.message);
//     }
//   });

select.addEventListener('change', function () {
  const selectedItem = select.value;
  console.log('ITEEEM', selectedItem);
  try {
    let options = JSON.parse(localStorage.getItem('options')) || {};
    if (selectedItem === 'show-all') {
      localStorage.removeItem('products');
      localStorageManager.defaultApiOptions();
      document.getElementById('search').value = '';
      categoriesFilter();
    } else {
      options.category = selectedItem;
      foodApi.category = selectedItem;
      foodApi
        .getFoodList()
        .then(function (data) {
          localStorageManager.updateLocalStorageWithFoodList(data, options);
          const productsArray = JSON.parse(localStorage.getItem('products'));
          const arrayLength = productsArray.length;
          console.log(arrayLength);
          createFirstFilter(productsArray);
          pagination.reset(arrayLength);
          pagination.setItemsPerPage(limitProd);
        })
        .catch(function (error) {
          console.error('Error fetching food list:', error.message);
        });
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
});
submitForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const searchValue = event.target.elements.search.value;
  console.log('Search Value:', searchValue);
  try {
    let options = JSON.parse(localStorage.getItem('options')) || {};
    options.keyword = searchValue;
    foodApi.searchQuery = searchValue;
    console.log('foodApi.searchQuery:', foodApi.searchQuery);
    foodApi
      .getFoodList()
      .then(function (data) {
        localStorageManager.updateLocalStorageWithFoodList(data, options);
        const productsArray = JSON.parse(localStorage.getItem('products'));
        const arrayLength = productsArray.length;
        console.log(arrayLength);
        createFirstFilter(productsArray);
        pagination.reset(arrayLength);
        pagination.setItemsPerPage(limitProd);
      })
      .catch(function (error) {
        console.error('Error fetching food list:', error.message);
      });
  } catch (error) {
    console.error('Error:', error.message);
  }
});

// Выбjр категории
// select.addEventListener('change', function () {
//     const selectedItem = select.value;
//     if (select.value === 'show-all') {
//     foodApi.getFoodList().then(data => {
//     localStorage.setItem('products', JSON.stringify(data));
//           });
//     } else {
//       foodApi.category = selectedItem;
//       foodApi
//         .getFoodList()
//         .then(data => {
//             localStorage.setItem('products', JSON.stringify(data));
//         })
//         .catch(error => {
//             console.error('Error fetching food list:', error.message);
//             throw error;
//         })
//     }
//   });

//   // Поиск по слову
// submitForm.addEventListener('submit', event => {
//     event.preventDefault();

//     const searchValue = event.target.elements.search.value;
//     foodApi.searchQuerry = searchValue;

//     foodApi
//       .getFoodList()
//       .then(data => {
//         localStorage.setItem('products', JSON.stringify(data));
//       })
//       .catch(error => {
//         console.error('Error fetching food list:', error.message);
//         throw error;
//       });
// });
function createFirstFilter(currentPage) {
  console.log('CURRENTPAGE', currentPage);
  let pageProd = 1;
  const page = 1;
  const limit = 90;
  const productKey = JSON.parse(localStorage.getItem('products'));
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
  console.log(firstElOnPage);
  console.log(limitтNumberProd);
  try {
    if (productKey && currentPage >= 1) {
      let pageCounter = (currentPage - 1) * 8;
      const itemsToDisplay = productKey.slice(
        firstElOnPage + pageCounter,
        limitтNumberProd + pageCounter
      );
      for (let i = 0; i < itemsToDisplay.length; i += 1) {
        console.log('hello', itemsToDisplay);
        const markup = creatMarkupProd(itemsToDisplay[i]);
        productsList.insertAdjacentHTML('beforeend', markup);
      }
    } else if (productKey && productKey.length > 0) {
      const itemsToDisplay = productKey.slice(firstElOnPage, limitтNumberProd);
      for (let i = 0; i < itemsToDisplay.length; i += 1) {
        const markup = creatMarkupProd(itemsToDisplay[i]);
        productsList.insertAdjacentHTML('beforeend', markup);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
pagination.on('afterMove', event => {
  const currentPage = event.page;
  createFirstFilter(currentPage);
});
