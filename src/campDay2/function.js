function addToCart(productName = "Apple Watch", quantity) {
    console.log("Səbətə Əlavə edildi! - məhsul : " + productName + ", ədəd : " + quantity);
}

addToCart("",6);
addToCart("iPhone", 9);
addToCart("iPad", 20);
addToCart("MacBook", 2);


let sayHello = ()=> {
    console.log("Hello World!");
}

sayHello();

let sayHello2 = function () {
    console.log("Hello World 2!");
}

sayHello2();


// Bu şəkildə istifadəsi çoxda arzuolunan deyil.
function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Canon", 2, 1200);
addToCart2("Sony", 3, 2400);
addToCart2("Nikon", 1, 800);

// Object dəyişən kimi əmələ gətirdikdə {} püsküllü mörtərizələr şəklində edirik. Kapsullama.
let product1 = {productName:"Sony A7 IV", unitPrice:2500, quantity:1};

function addToCart3(product1) {
console.log("Məhsul: " + product1.productName);
console.log("Qiymət: " + product1.unitPrice);
console.log("Stok Ədədi: " + product1.quantity);
}


addToCart3(product1)
// Heap referans Tip
let product2 = {productName:"Sony A7 IV", unitPrice:2500, quantity:1};
let product3 = {productName:"Sony A7 IV", unitPrice:2500, quantity:1};
product2 = product3;
product2.productName = "Canon Mark IV";
console.log(product3.productName);

// Stek eded tip
let eded1 = 10;
let eded2 = 20;
eded1 = eded2;
eded2 = 100;
console.log(eded1); 

function addToCart4(products) {
    console.log(products);
} 
// Arrays(massiv) [] Düz mörtərizə ilə əmələ gətirilir.

let products = [
    {productName:"Apple iPhone 11", unitPrice:1500, quantity:3},
    {productName:"Apple iPhone 12 Mini", unitPrice:1600, quantity:2},
    {productName:"Apple iPhone 13 Pro", unitPrice:3400, quantity:1},
]

addToCart4(products);

// 01:58:30 