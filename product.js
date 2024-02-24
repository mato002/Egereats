// json file upload  to the  product 

let iconCart = document.querySelector(".icon-cart");
let closeCart = document.querySelector(".close");
let body = document.querySelector(".body");
let listProductHTML = document.querySelector(".listProduct");

let listProducts = [];

iconCart.addEventListener('Click',() =>{
  body.classList.toggle('showCart')
})

closeCart.addEventListener('click',() =>{
  body.classList.toggle(' showCart')
})

const addDataToHTML = () => {
  listProductHTML.innerHTML = '';
  if(listProducts.length > 0){
      listProducts.forEach(product => {
          let newProduct = document.createElement('div');
          newProduct.classList.add('item');
          newProduct.innerHTML = `
          <img src="${product.img}" alt="">
              <h2>${product.name}  </h2>
              <div class="price">${product.price}</div>
              <button class="addCart">
              Add To Cart
              </button>`;
          listProductHTML.appendChild(newProduct) ;  
      
      })

  }
}



const addCart = (product_id) => {
  let positionThisProductInCart  = carts.findIndex((value) => value.product_id == product_id);
  if(carts.length <= 0){
    carts = [{
      product_id:product_id,
      quantity: 1
    }]

  }else if(positionThisProductInCart < 0 ){
    cart.push({
      product_id: product_id,
      quantity: 1
    })
  }else {
    carts[positionThisProductInCart].quantity
  }
  console.log(carts);

}

const initApp = () => {
    //get data from json
  fetch('products.json')
  .then(response => response.json())
  .then( data=> {
      listProducts = data ;
      addDataToHTML();
  })
}

initApp();