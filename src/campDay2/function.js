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

//... rest (Function sonuna saxlamaq lazım)
function add(...numbers) {
    let total = 0;
    for(let i = 0; i < numbers.length; i++){
        total = total + numbers[i];
    }
    console.log(total);
}

add(20,30,40,50);

// spread massivi ayırar rest massivi toparlayar.
let numbers = [30, 70, 20, 10, 800, 200]
console.log(Math.max(...numbers))

let [sherq, qerb, shimal,[sherqSheherleri, qerbSheherleri]] = [
    {name: "Şərq", population:"4M"}, 
    {name: "Qərb", population:"2M"}, 
    {name: "Şimal", population:"1M"}, 
     [
        ["Bakı", "Sumqayıt"],
        ["Tovuz", "Şəmkir"],
        ["Zaqatala", "Qusar"],
     ]
         
     
];
console.log(sherq.name);
console.log(sherqSheherleri);
console.log(qerbSheherleri);


// Object yazanda bu syntax.
let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} 
 = {productName:"Apple iPhone SE", unitPrice:1300, quantity:1});

 console.log(newProductName);
 console.log(newUnitPrice);
 console.log(newQuantity);

 // Camp Day 2
