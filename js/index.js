import { product } from "./data.js"
import { customer } from "./clientdata.js"
const container_slider = document.getElementById("product_slider");
const client_slider = document.getElementById("client_slider");

const fileShower = () => {
  for (let i = 0; i <= product.length - 1; i++) {
    const newDiv = document.createElement('div')
    const displayProduct = `
    <div class="product-card">
    <div class="product-image">
        <img src=${product[i]?.image} alt="Product Image">
    </div>
    <div class="product-info">
        <h2 class="product-title">${product[i]?.name}</h2>
        <p class="product-price">$${product[i]?.price}</p>
        <p>${product[i]?.description.slice(0, 45)}....</p>
      <button>Bye Now</button>
    </div>
    <div class="product-hover-info">
        <p class="discount">${product[i]?.discount}</p>
        <button class="add-to-cart">Quick Add to Cart</button>
    </div>
</div>



    `
    newDiv.innerHTML = displayProduct;
    container_slider.appendChild(newDiv)
  }
}

fileShower()

const customerSlider = () => {
  for (let i = 0; i <= customer.length - 1; i++) {
    const newDiv = document.createElement('div')
    let reviewStar = '';
    for (let j = 0; j <= customer[i].rating - 1; j++) {
      reviewStar += `<span style="color:#fed934"><i class="fa-solid fa-star"></i></span>`
    }
    const displayProduct = `
      <div class="client">
      <div class="client-image">
        <img src=${customer[i] ?.image} alt="productImage" />
      </div>
      <div class="client-body">
        <h4>${customer[i] ?.customerName}</h4>
        <p>${customer[i] ?.reviewText}</p>
        <p style="margin-top: 20px;">${reviewStar}</p>
      </div>
      </div>
    `
    newDiv.innerHTML = displayProduct;
    client_slider.appendChild(newDiv)
  }
}
customerSlider()
