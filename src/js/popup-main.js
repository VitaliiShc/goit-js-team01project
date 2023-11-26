// const refs = {
//   productCard: document.querySelector('.prod-item'),
//   productList: document.querySelector('.list-prod'),
//   popupMain: document.querySelector('.popup-main'),
//   // list
//   popupMainPhoto: document.querySelector('popup-main-photo'),
//   popupMainTitle: document.querySelector('popup-main-title'),
//   popupMainSubtitles: document.querySelector('popup-main-subtitles'),
//   popupMainText: document.querySelector('popup-main-text'),
//   popupMainPrice: document.querySelector('popup-main-price'),
// };

// const getLocalStorage = JSON.parse(localStorage.getItem('res.data'));
// console.log(getLocalStorage);

// function getProductId(id) {
//   console.log(id);
//   const find = getLocalStorage.find(obj => obj._id === id);
//   console.log(find);
//   return find;
// }

// refs.productList.addEventListener('click', e => {
//   console.log(e.currentTarget);
//   e.preventDefault();
//   console.log(e.target);
//   const id = e.target.id;
//   getProductId(id);
//   refs.popupMain.classList.remove('is-hidden');
//   const { category, name, img, price, size, is10PercentOff, popularity, _id } =
//     id;
//   // refs.popupMainPhoto.src = `${img}`;
// });

// import axios from 'axios';

// const refs = {
//   productItem: document.querySelector('.prod-item'),
//   productList: document.querySelector('.list-prod'),
// };

// async function getProductByID(id) {
//   try {
//     const API_URL = 'https://food-boutique.b.goit.study/api';
//     const END_POINT = `/products/${id}`;
//     const url = `${API_URL}${END_POINT}`;

//     const response = await axios.get(url);
//     const data = await response.data;
//     console.log(data);
//     return data;

//   } catch (error) {
//     console.error(error);
//   }
// }

// function createMarkup(data) {
//   console.log(data)
// }

// refs.productList.addEventListener('click', e => {
//   console.log(e.target.id)
//   const id = e.target.id;
//   getProductByID(id);
// });