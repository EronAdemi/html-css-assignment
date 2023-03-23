const productDetails = JSON.parse(localStorage.getItem("productDetails"));
console.log(productDetails);

const productImage = document.querySelector(".product-image");
productImage.src = productDetails.image;

const productTitle = document.querySelector(".product-title");
productTitle.textContent = productDetails.product;

const productPrice = document.querySelector(".product-price");
productPrice.innerHTML = productDetails.price
