import { beforeComma, comma } from '/src/lib/';
const cancelBtn = document.querySelector('.add-cart-cancel');
const addCartBtn = document.querySelector('.add-cart-close');
const cartDialog = document.querySelector('.add-cart-popup');

const minusBtn = document.querySelector('.minus-button');
const plusBtn = document.querySelector('.plus-button');
const count = document.querySelector('.count');

const currentPrice = document.querySelector('.current-price');
const discountPrice = document.querySelector('.discount-price');
const totalPrice = document.querySelector('.total-price');

const price_1 = beforeComma(currentPrice.innerText);
console.log(price_1);
// const price_2 = beforeComma(discountPrice.innerText);
// const price_3 = beforeComma(totalPrice.innerText);
// close event
function cancelDialog(e) {
  e.preventDefault();

  document.body.style = 'overflow: auto';
  cartDialog.close();
}

cancelBtn.addEventListener('click', cancelDialog);

// add Cart event
function addProductCart(e) {
  e.preventDefault();

  document.body.style = 'overflow: auto';
  cartDialog.close();
}

addCartBtn.addEventListener('click', addProductCart);

// 버튼 [수량 감소, 수량 증가]

function minusCount(e) {
  e.preventDefault();

  let productCount = Number(count.innerText);
  currentPrice.innerText = `${comma(price_1 * productCount)}원`;
  console.log(price_1);

  // discountPrice.innerText = price_2 * productCount;
  // totalPrice.innerText = price_3 * productCount;

  if (productCount === 2) {
    minusBtn.disabled = true;
  }

  count.innerText = productCount - 1;
}

function plusCount(e) {
  e.preventDefault();

  let productCount = Number(count.innerText);
  count.innerText = productCount + 1;
  currentPrice.innerText = `${comma(price_1 * productCount)}원`;
  console.log(price_1);

  // discountPrice.innerText = price_2 * productCount;
  // totalPrice.innerText = price_3 * productCount;

  minusBtn.disabled = false;
}

minusBtn.addEventListener('click', minusCount);
plusBtn.addEventListener('click', plusCount);
