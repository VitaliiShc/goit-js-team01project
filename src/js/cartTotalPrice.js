export function calcTotalPrice(objArr) {
  let TOTAL_PRICE = 0;
  for (const product of objArr) {
    TOTAL_PRICE += product.price;
  }
  return TOTAL_PRICE.toFixed(2);
}
