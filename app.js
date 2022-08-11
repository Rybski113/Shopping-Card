let shop = document.getElementById('shop');

let shopItemsData = [
    {
         id: "aaa",
         name: "Casual Shirt",
         price: 45,
         desc: "Lorem Ipsum dolor sit amet...",
         img: "img/img-1.jpg"
    }, 
    {
         id: "bbb",
         name: "Oficce Shirt",
         price: 75,
         desc: "Lorem Ipsum dolor sit amet...",
         img: "img/img-2.jpg"
    }, 
    {
        id: "ccc",
        name: "T-Shirt",
        price: 15,
        desc: "Lorem Ipsum dolor sit amet...",
        img: "img/img-3.jpg"
    }, 
    {
         id: "ddd",
         name: "Men's Suit",
         price: 145,
         desc: "Lorem Ipsum dolor sit amet...",
         img: "img/img-4.jpg"
    }]



let generateShop = ()=> {
    return (shop.innerHTML = shopItemsData.map((x)=>{
        return `
        <div class="item">
        <img width="220" src="img/img-1.jpg" alt="">
        <div class="details">
            <h3>Casual Shirt</h3>
            <p>Lorem ipsum, sit amet ...</p>
            <div class="price-quantity">
                <h2>$ 45</h2>
                <div class="buttons">
                    <i class="fa-solid fa-minus"></i>
                  <div class="quantity">0</div>
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>
        </div>
     </div>
        `
    }).join(""))}

generateShop()