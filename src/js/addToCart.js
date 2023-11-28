export function addToCart(event) {
  let buyingProd = event.currentTarget;
  let productId = buyingProd.id;

  const savedProduct1 = JSON.parse(localStorage.getItem('res.data'));
  const prodInCart = savedProduct1.find(option => option._id === productId);
  const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
  const productAlreadyInCart = currentCart.find(
    item => item._id === prodInCart._id
  );

  if (!productAlreadyInCart) {
    currentCart.push(prodInCart);
    localStorage.setItem('cart', JSON.stringify(currentCart));
    console.log('added to cart', event.currentTarget.id);
  } else {
    console.log('already in cart', event.currentTarget.id);
  }
}
