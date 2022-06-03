let shop = document.getElementById('shop');

let shopItemsData = [{
    id:"abc",
    name:"casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet ...",
    img: "img/1.jpg"
},
 {
    id:"def",
    name:"Office Shirt",
    price: 100,
    desc: "Lorem ipsum dolor sit amet ...",
    img: "img/2.jpg"
 },
  {
    id:"ghi",
    name:"T-Shirt",
    price: 25,
    desc: "Lorem ipsum dolor sit amet ...",
    img: "img/3.jpg"
  },
   {
    id:"jkl",
    name:"Mens Suit",
    price: 300,
    desc: "Lorem ipsum dolor sit amet ...",
    img: "img/4.jpg"
   }]

let generateShop = ()=> {
    return shop.innerHTML =  `
    <div class="item">
            <img width="220" src="img/1.jpg" alt="shirts">
            <div class="details">
                <h3>Casual Shirt</h3>
                <p>lorem ipsum dolor, Dolor sit</p>
                <div class="price-quantity">
                    <h2>$ 45</h2>
                    <div class="buttons">
                        <i class="bi bi-dash-lg"></i>
                        <div class="quantity">0</div>
                        <i class="bi bi-plus-lg"></i> 
                    </div>
                </div>
            </div>
        </div>
    `
}

generateShop()