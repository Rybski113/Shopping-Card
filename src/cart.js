let label = document.getElementById("label")
let shoppingCart = document.getElementById("shopping-cart")
let basket = JSON.parse(localStorage.getItem("data")) || []



let calculation = ()=> {
    let cartIcon = document.getElementById("cartAmount")
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y)=> x+y, 0)
    
}

calculation()

let generateCartItems = ()=>{
    if(basket.length !== 0) {
        return (shoppingCart.innerHTML = basket.map((x)=>{
            let {id, item} = x
            let search = shopItemsData.find((y)=> y.id === id) || []
            return `
             <div class="cart-item">
              <img width="100" src=${search.img} alt=""/>
              <div class="details">
                <div class="title-price-x">
                    <h4>
                       <p>${search.name}</p>
                    </h4>
                    <i class="fa-solid fa-xmark"></i>
                </div>
              </div>
             </div>
            `
        }).join(""))
    } else {
        shoppingCart.innerHTML = ``
        label.innerHTML = `
        <h2>Cart is Empty</h2>
        <a href="index.html">
          <button class="homeBtn">Back to home</button>
        </a>

        `
    }
}

generateCartItems()