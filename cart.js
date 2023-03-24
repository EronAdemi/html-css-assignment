const cartItems = JSON.parse(localStorage.getItem("cart"));

const rightWrapper = document.querySelector(".right-wrapper");

const shopingItem = document.querySelector(".shoping-item");
shopingItem.innerText = `My Shopping Bag (${cartItems.length} Items)`;
const totalPrice = document.querySelector(".total-price");
totalPrice.innerText = `Total $ ${parseInt(
  localStorage.getItem("total")
).toFixed(2)}`;


const rightTotalPrice = document.querySelector(".right-total-price");
rightTotalPrice.innerText = `Total $ ${parseInt(
  localStorage.getItem("total")
).toFixed(2)}`;
const subTotal = document.querySelector(".sub-total-price");
subTotal.innerText = `Total $ ${parseInt(localStorage.getItem("total")).toFixed(
  2
) - 3.95}`;

cartItems.map((item) => {
 
  const productContainer = document.createElement("div");
  productContainer.className = "product-container";
  rightWrapper.appendChild(productContainer);


  const imageContainer = document.createElement("div");
  imageContainer.className = "image-container";
  const productImage = document.createElement("img");
  productImage.src = item.image;
  productImage.alt = item.product;
  productContainer.appendChild(imageContainer);
  imageContainer.appendChild(productImage);

 
  const productDetails = document.createElement("div");
  productDetails.className = "product-details";
  productContainer.appendChild(productDetails);
  const productPriceTitle = document.createElement("div");
  productPriceTitle.className = "product-price-title";
  productDetails.appendChild(productPriceTitle);
  const brand = document.createElement("h1");
  brand.innerText = "Brand";
  productPriceTitle.appendChild(brand);
  const productPrice = document.createElement("h1");
  productPrice.innerText = `$ ${item.price.toFixed(2)}`;
  productPriceTitle.appendChild(productPrice);
  const productName = document.createElement("p");
  productName.innerText = item.product;
  productDetails.appendChild(productName);


  const extraContainer = document.createElement("div");
  extraContainer.className = "product-detalj-extra";
  productDetails.appendChild(extraContainer);
  const productSize = document.createElement("p");
  productSize.innerText = " Size: L";
  extraContainer.appendChild(productSize);
  const quantity = document.createElement("p");
  quantity.innerText = "Qty: 1";
  extraContainer.appendChild(quantity);


  const actionButtons = document.createElement("div");
  actionButtons.className = "action-buttons";
  rightWrapper.appendChild(actionButtons);
  const removeButton = document.createElement("button");
  removeButton.className = "remove-btn";
  removeButton.innerText = "REMOVE";
  actionButtons.appendChild(removeButton);
  const wishButton = document.createElement("button");
  wishButton.className = "add-to-wish-btn";
  wishButton.innerText = "ADD TO WISHLIST";
  actionButtons.appendChild(wishButton);
});
