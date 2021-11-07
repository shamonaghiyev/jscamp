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