/* <!-- Resource: shopping cart used on all pages, original by Vincy - Link in sourcelist --> */

const products = [
    {
      id: 1,
      image: "./assets/product-pics/RainyDays_Jacket1 3.svg",
      product: "Orange Jacket",
      price: 1449.99,
    },
    {
      id: 2,
      image: "./assets/product-pics/RainyDays_Jacket1 3.svg",
      product: "Orange Jacket",
      price: 1799.99,
    },
    {
      id: 3,
      image: "./assets/product-pics/RainyDays_Jacket4 1.svg",
      product: "Black Jacket",
      price: 2199.99,
    },
    {
      id: 4,
      image: "./assets/product-pics/RainyDays_Jacket1 3.svg",
      product: "Orange Jacket",
      price: 1129.99,
    },
    {
      id: 5,
      image: "./assets/product-pics/RainyDays_Jacket4 1.svg",
      product: "Black Jacket",
      price: 1899.99,
    },
    {
      id: 6,
      image: "./assets/product-pics/RainyDays_Jacket1 3.svg",
      product: "Orange Jacket",
      price: 99.99,
    },
    {
      id: 7,
      image: "./assets/product-pics/RainyDays_Jacket1 3.svg",
      product: "Orange Jacket",
      price: 1299.99,
    },
    {
      id: 8,
      image: "./assets/product-pics/RainyDays_Jacket1 3.svg",
      product: "Orange Jacket",
      price: 1999.99,
    },
  ];
  
  const productContainer = document.querySelector(".product-container");
  
  var cart = [];
  var total = 0;
  
  const addtoCart = (price) => {
    return () => {
      cart = cart.concat(price);
      console.log(cart);
      localStorage.setItem("cart", JSON.stringify(cart));
      cartTotal();
    };
  };
  
  const cartTotal = () => {
    total = cart.reduce((partialSum, a) => partialSum + a.price, 0);
    localStorage.setItem("total", total)
    console.log(total);
    writeTotal(JSON.parse(localStorage.getItem("total")));
  };
  
  const writeTotal = (total) => {
    const cartTotal = document.querySelector(".cart-total");
    cartTotal.innerHTML = total.toFixed(2);
  
  };
  
  const clearCart = () => {
    cart = [];
    cartTotal(0)
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  
  
  
  const clear = document.querySelector(".clear-cart");
  clear.addEventListener("click", clearCart);
  
  const myProducts = products.map((product, index) => {
    
    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container";
    
    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";
    
    const image = document.createElement("div");
    image.className = "image";
  
    const link = document.createElement("a");
    link.href="./product.html"
  
    const img = document.createElement("img");
    img.src = product.image;
  
    const checkoutBag = document.createElement("div");
    checkoutBag.className = "checkout-bag";
  
    const checkoutImage = document.createElement("img");
    checkoutImage.src = "./assets/checkout-bag.svg";
  
    const itemDetails = document.createElement("div");
    itemDetails.className = "item-details";
  
    const productName = document.createElement("h2");
    productName.innerHTML = product.product;
  
    const priceTag = document.createElement("p");
    priceTag.className = "price-tag";
    priceTag.innerHTML = "$" + product.price;
  
    productContainer.appendChild(cardContainer);
    cardContainer.appendChild(imageContainer);
    imageContainer.appendChild(image);
    image.appendChild(link)
    link.appendChild(img);
    imageContainer.appendChild(checkoutBag);
    checkoutBag.appendChild(checkoutImage);
    imageContainer.appendChild(itemDetails);
    itemDetails.appendChild(productName);
    itemDetails.appendChild(priceTag);
  console.log(product);
    checkoutImage.addEventListener("click", addtoCart(product));
    link.addEventListener("click", () => localStorage.setItem("productDetails", JSON.stringify(product)));
  });
  