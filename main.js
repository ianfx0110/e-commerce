const products = [
{
  image: {
    thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
    mobile: "./assets/images/image-waffle-mobile.jpg",
    tablet: "./assets/images/image-waffle-tablet.jpg",
    desktop: "./assets/images/image-waffle-desktop.jpg",
  },
  name: "Waffle with Berries",
  category: "Waffle",
  price: 6.5,
},
{
  image: {
    thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
    mobile: "./assets/images/image-creme-brulee-mobile.jpg",
    tablet: "./assets/images/image-creme-brulee-tablet.jpg",
    desktop: "./assets/images/image-creme-brulee-desktop.jpg",
  },
  name: "Vanilla Bean Crème Brûlée",
  category: "Crème Brûlée",
  price: 7.0,
},
{
  image: {
    thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
    mobile: "./assets/images/image-macaron-mobile.jpg",
    tablet: "./assets/images/image-macaron-tablet.jpg",
    desktop: "./assets/images/image-macaron-desktop.jpg",
  },
  name: "Macaron Mix of Five",
  category: "Macaron",
  price: 8.0,
},
{
  image: {
    thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
    mobile: "./assets/images/image-tiramisu-mobile.jpg",
    tablet: "./assets/images/image-tiramisu-tablet.jpg",
    desktop: "./assets/images/image-tiramisu-desktop.jpg",
  },
  name: "Classic Tiramisu",
  category: "Tiramisu",
  price: 5.5,
},
{
  image: {
    thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
    mobile: "./assets/images/image-baklava-mobile.jpg",
    tablet: "./assets/images/image-baklava-tablet.jpg",
    desktop: "./assets/images/image-baklava-desktop.jpg",
  },
  name: "Pistachio Baklava",
  category: "Baklava",
  price: 4.0,
},
{
  image: {
    thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
    mobile: "./assets/images/image-meringue-mobile.jpg",
    tablet: "./assets/images/image-meringue-tablet.jpg",
    desktop: "./assets/images/image-meringue-desktop.jpg",
  },
  name: "Lemon Meringue Pie",
  category: "Pie",
  price: 5.0,
},
{
  image: {
    thumbnail: "./assets/images/image-cake-thumbnail.jpg",
    mobile: "./assets/images/image-cake-mobile.jpg",
    tablet: "./assets/images/image-cake-tablet.jpg",
    desktop: "./assets/images/image-cake-desktop.jpg",
  },
  name: "Red Velvet Cake",
  category: "Cake",
  price: 4.5,
},
{
  image: {
    thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
    mobile: "./assets/images/image-brownie-mobile.jpg",
    tablet: "./assets/images/image-brownie-tablet.jpg",
    desktop: "./assets/images/image-brownie-desktop.jpg",
  },
  name: "Salted Caramel Brownie",
  category: "Brownie",
  price: 4.5,
},
{
  image: {
    thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
    mobile: "./assets/images/image-panna-cotta-mobile.jpg",
    tablet: "./assets/images/image-panna-cotta-tablet.jpg",
    desktop: "./assets/images/image-panna-cotta-desktop.jpg",
  },
  name: "Vanilla Panna Cotta",
  category: "Panna Cotta",
  price: 6.5,
},
];

const productContainer = document.querySelector("#products-list");

function renderProducts() {
products.forEach((product) => {
  const productElement = document.createElement("div");
  productElement.classList.add("product");
  productElement.innerHTML = `
          <picture>
              <source media="(min-width: 1024px)" srcset="${product.image.desktop}">
              <source media="(min-width: 768px)" srcset="${product.image.tablet}">
              <source media="(min-width: 480px)" srcset="${product.image.mobile}">
              <img src="${product.image.thumbnail}" alt="${product.name}">
          </picture>
          <button class="add-to-cart" id="${product.name.replaceAll(" ", "-")}">Add to Cart</button>
          <p>${product.category}</p>
          <h3>${product.name}</h3>
          <span>$${product.price.toFixed(2)}</span>
      `;
  productContainer.appendChild(productElement);
});
}

renderProducts(); // executes when the page loads to display the products on the page

const cartList = [
{ name: "Waffle with Berries", price: 6.5, count: 1 },
{ name: "Vanilla Bean Crème Brûlée", price: 7.0, count: 1 }
];

function renderCart(cartList) {
const cartContainer = document.querySelector("#cart-list");
cartContainer.innerHTML = ""; // Clear previous cart items

cartList.forEach((item) => {
  const cartItem = document.createElement("li");
  cartItem.innerHTML = `
  <h3>${item.name}</h3>
  <p>${item.count}x $${item.price.toFixed(2)} </p>
  <button class="remove-from-cart">x</button>
  `;
  cartContainer.appendChild(cartItem);
});
document.querySelectorAll(".remove-from-cart").forEach((button) => {
  button.addEventListener("click", (event) => {
    const productName = event.target.previousElementSibling.previousElementSibling.textContent;
    cartList = cartList.filter((item) => item.name !== productName);
    renderCart(cartList);
  });
});
}
renderCart(cartList); // executes when the page loads to display the cart items on the page

const addToCartButtons = document.querySelectorAll(".add-to-cart");
console.log(addToCartButtons);

addToCartButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const productName = event.target.getAttribute("id").replaceAll("-", " ");
    console.log(productName);
    const productPrice = products.find((product) => product.name === productName).price;

    if (cartList.some((item) => item.name === productName)) {
      cartList.find((item) => item.name === productName).count += 1;
    } else {
      cartList.push({ name: productName, price: productPrice, count: 1 });
    }

    renderCart(cartList);

  });
});