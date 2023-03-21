const minusButtons = document.querySelectorAll('.minus');
const plusButtons = document.querySelectorAll('.plus');
const quantities = document.querySelectorAll('.quantity');
const prices = document.querySelectorAll('.cart-item-price');
const totalPrice = document.querySelector('.cart-total');
const productTotals = document.querySelectorAll('.product-total');

plusButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    quantities[index].value++;
    updateTotalPrice();
    updateProductTotal(index);
  });
});

minusButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (quantities[index].value > 0) {
      quantities[index].value--;
      updateTotalPrice();
      updateProductTotal(index);
    }
  });
});

function updateTotalPrice() {
  let total = 0;
  quantities.forEach((quantity, index) => {
    total += parseInt(quantity.value) * parseInt(prices[index].textContent.replace("EGP", ""));
  });
  totalPrice.textContent = `Total: EGP ${total}`;
}

function updateProductTotal(index) {
  let productTotal = parseInt(quantities[index].value) * parseInt(prices[index].textContent.replace("EGP", ""));
  productTotals[index].textContent = `EGP ${productTotal}`;
};

