let label = document.getElementById('label')
let ShoopingCart = document.getElementById('shooping-cart')
let basket = JSON.parse(localStorage.getItem("data")) || [];

console.log(basket)

let calculation = () =>{
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y)=> x+y,0)
    
};

calculation();

let generateCartItems = ()=> {
    if(basket.length !== 0) {
        console.log("basket is not empty")
    } else {
        console.log("basket is empty")
    }
}

generateCartItems()