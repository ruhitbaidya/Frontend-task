import {product} from "./data.js"
const container_slider = document.getElementById("product_slider");

const fileShower = ()=>{
  for(let i = 0; i <= product.length; i++){
    const newDiv = document.createElement('div')
    const displayProduct = `
      <div class="card">
      <div class="card-image">
        <img src=${product[i].image} alt="productImage" />
      </div>
      <div class="card-body">
        <h4>${product[i].name}</h4>
        <p>  $${product[i].price}</p>
        <p>${product[i].description.slice(0, 50)}....</p>
        <button>Bye Now</button>
      </div>
      </div>
    `
    newDiv.innerHTML = displayProduct;
    container_slider.appendChild(newDiv)
    console.log(displayProduct)
  }
}

fileShower()