
console.log("Camp Day 3")

let cart = [
    {id:1, productName:"iPhone", quantity:2, unitPrice:2000},
    {id:2, productName:"MacBook", quantity:1, unitPrice:4000},
    {id:3, productName:"Airpods", quantity:9, unitPrice:400},
    {id:4, productName:"iPad", quantity:4, unitPrice:1400},
    {id:5, productName:"Apple Watch", quantity:3, unitPrice:1100},
    {id:6, productName:"Book", quantity:2, unitPrice:50},
]
// SPA Single Page Application

//cart.map(product=>console.log(product));

console.log("<ul>")
cart.map(product=>{
    console.log("<li>" + product.productName + " : "
     + product.unitPrice * product.quantity + "</li>");
})
console.log("</ul>")

//Reduce 
let total = cart.reduce((acc, product)=> acc + product.quantity * product.unitPrice, 0);
console.log(total);

//Filter
let quantityOver2 = cart.filter(product=> product.quantity > 2);
console.log(quantityOver2);



function addToCart(sebet) {
    sebet.push({id:7, productName:"Case", quantity:3, unitPrice:10});
}
addToCart(cart);
console.log(cart);


let eded = 10;
function ededTopla(number) {
    number += 2;
}
ededTopla(eded);
console.log(eded);
