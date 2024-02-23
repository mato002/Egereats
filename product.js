// json file upload  to the  product 

let iconCart = document.querySelector(".icon-cart");
let closeCart = document.querySelector(".close");
let body = document.querySelector("body");
let ProductHtml = document.querySelector("listProduct");

let listProduct = [];

iconCart.addEventListener('click',() =>{
  body.classList.toggle('showCart')
})

closeCart.addEventListener('click',() =>{
  body.classList.toggle(' showcart')
})

const addDataToHTML = () => {
  listProductHTML.innerHTML = '';
  if(listProduct.length > 0){
      listProduct.forEach(product => {
          let newProduct = document.createElement('div');
          newProduct.classList.add('item');
          newProduct.innerHTML = `
          <img src="${product.img}" alt="">
              <h2>${product.name}  </h2>
              <div class="price">${product.price}</div>
              <button class="addCart">Add To Cart</button>`;
          listProductHTML.appendChild(newProduct) ;  
      
      })

  }
}

const initApp = () => {
    //get data from json
  fetch('products.json')
  .then(response => response.json())
  .then( data=> {
      listProduct = data ;
      addDataToHTML();
  })
}

initApp();