//rest - istediyimiz qeder parametr yollayiriq array kimi tutur.
//params C#
//varArgs Java
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products[0]) //rest parametr
}

// console.log(typeof showProducts)
//showProducts(9,["BMW","Mercedes","AUDI"]) //rest

//spread - ayirishtirmaq, Arrays ayirir.
let points = [1,2,4,9,20,13,99,8]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//Destructuring - Parcalamaq
let populations = [10000, 20000, 30000, [40000,100000]]
let[small, medium, high,[veryHigh, maximum]] = populations

console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)


function someFunction([small1],number) {
    console.log(small1)
    
}
someFunction(populations)

let category = {id:1, name:"Icki"}
console.log(category.id)
console.log(category["name"])

let{id,name} = category
console.log(id)
console.log(name)