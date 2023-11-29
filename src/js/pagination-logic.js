import { searchFirstAPI } from './firstGet.js';
import { pagination } from './pagination.js';
import { createFirst, creatMarkupProd } from './firstProdGet.js';
import { limitProd } from './firstProdGet.js';
const firstGet = new searchFirstAPI();
const savedProduct = localStorage.getItem('res.data');
const parseItem = JSON.parse(savedProduct);
pagination.reset(parseItem.length);
console.log('Довжина масиву results:', parseItem.length);

pagination.on('afterMove', event => {
  const currentPage = event.page;
  createFirst(currentPage);
});
const newTotalItems = 18;
pagination.setTotalItems(newTotalItems);
let itemsPerPage = limitProd;
pagination.setItemsPerPage(itemsPerPage);
