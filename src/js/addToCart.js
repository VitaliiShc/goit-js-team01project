const cartValue = localStorage.getItem('cart');
if (cartValue !== null) {
} else {
  localStorage.setItem('cart', JSON.stringify([]));
}
const buyClick = document.querySelectorAll('.buy-btn');
buyClick.forEach(button => {
  button.addEventListener('click', addToCart);
});
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
