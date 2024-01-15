fetch('/src/components/header.html')
  .then((res) => res.text())
  .then((data) => {
    const header = document.querySelector('header');
    header.innerHTML = data;
    return import('/src/js/header.js');
  })
  .catch((error) => {
    console.error(error);
  });

fetch('/src/components/footer.html')
  .then((res) => res.text())
  .then((data) => {
    const footer = document.querySelector('footer');
    footer.innerHTML = data;
  });

fetch('/src/pages/components/addCart/index.html')
  .then((response) => response.text())
  .then((text) => {
    const cartDialog = document.querySelector('.add-cart-popup');
    cartDialog.insertAdjacentHTML('afterbegin', text);

    return import('/src/pages/components/addCart/addCart.js');
  })
  .catch((error) => {
    console.log(error);
  });

// fetch('/src/components/recently.html')
//   .then((res) => res.text())
//   .then((data) => {
//     const recentlySwiper = document.querySelector('.recently-swiper');
//     recentlySwiper.innerHTML = data;
//     return import('/src/js/recently.js');
//   });
