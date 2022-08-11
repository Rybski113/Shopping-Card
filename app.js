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

let basket = []

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
                    <i onclick= "decrement(${id})" class="fa-solid fa-minus"></i>
                  <div id=${id} class="quantity">0</div>
                    <i onclick= "increment(${id})" class="fa-solid fa-plus"></i>
                </div>
            </div>
        </div>
     </div>
        `
    }).join(""))}

generateShop()

let increment = (id)=> {
   let selectedItem = id 
   let search = basket.find((x)=> x.id === selectedItem.id)

 
   if(search === undefined) {
    basket.push(
        {
        id: selectedItem.id,
        item: 1,
       })
   }
   else {
    search .item +=1;
   }

  

   console.log(basket)
}

let decrement = (id)=> {
    let selectedItem = id 
   console.log(selectedItem.id)

}

let update = ()=> {
    
}