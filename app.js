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
        let {id, name, price, desc, img} = x
        return `
        <div id=product-id-${id} class="item">
        <img width="220" src="${img}" alt="">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>$ ${price}</h2>
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