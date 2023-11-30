import { FoodApi } from './api.js';
import { LocalStorage } from './local-storage.js';
const submitForm = document.querySelector('.submit-form');
const select = document.querySelector('.categories');
// Дефолтные значение в хранилище
document.addEventListener('DOMContentLoaded', () => {
    localStorageManager.defaultApiOptions()});

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
select.addEventListener('change', async function () {
const selectedItem = select.value;

  try {
    
let options = JSON.parse(localStorage.getItem('options')) || {};
if (selectedItem === 'show-all') {
  localStorage.removeItem('products');
  localStorageManager.defaultApiOptions();

  document.getElementById('search').value = '';
} else {
  options.category = selectedItem;
  foodApi.category = selectedItem;
  const data = await foodApi.getFoodList();
  localStorageManager.updateLocalStorageWithFoodList(data, options);
}
  } 
    catch (error) {
    console.error('Error fetching food list:', error.message);
  }
});



// Сабмит
submitForm.addEventListener('submit', async event => {
    event.preventDefault();
    const searchValue = event.target.elements.search.value;
  console.log('Search Value:', searchValue);
  
    try {
      let options = JSON.parse(localStorage.getItem('options')) || {};
      options.keyword = searchValue;
      options.keyword = searchValue !== '' ? searchValue : null;

      foodApi.searchQuery = searchValue;
      console.log('foodApi.searchQuery:', foodApi.searchQuery);
  
      const data = await foodApi.getFoodList();
  
      localStorageManager.updateLocalStorageWithFoodList(data, options);
    } catch (error) {
      console.error('Error fetching food list:', error.message);
    }
  });
  
    





















