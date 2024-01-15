const cancelBtn = document.querySelector('.add-cart-cancel');
const addCartBtn = document.querySelector('.add-cart-close');
const cartDialog = document.querySelector('.add-cart-popup');

const minusBtn = document.querySelector('.minus-button');
const plusBtn = document.querySelector('.plus-button');
const count = document.querySelector('.count');

function cancelDialog(e) {
  e.preventDefault();

  document.body.style = 'overflow: auto';
  cartDialog.close();
}

cancelBtn.addEventListener('click', cancelDialog);

function addProductCart(e) {
  e.preventDefault();

  document.body.style = 'overflow: auto';
  cartDialog.close();
}

addCartBtn.addEventListener('click', addProductCart);

// 버튼 [수량 감소, 수량 증가]

function minusCount(e) {
  e.preventDefault();

  let productCount = Number(count.textContent);

  count.textContent = --productCount;
}

function plusCount(e) {
  e.preventDefault();

  let productCount = Number(count.textContent);

  count.textContent = ++productCount;

  if (productCount > 1) {
    minusBtn.disabled = false;
  }
}

minusBtn.addEventListener('click', minusCount);
plusBtn.addEventListener('click', plusCount);
