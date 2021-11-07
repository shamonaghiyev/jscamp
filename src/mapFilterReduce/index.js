let products = [
    {id:1, name: "Lenovo Notebook", unitPrice:3400},
    {id:2, name: "Apple Notebook", unitPrice:4000},
    {id:3, name: "Asus Notebook", unitPrice:2800},
    {id:4, name: "Msi Notebook", unitPrice:3000},
    {id:5, name: "Acer Notebook", unitPrice:3300},
]


//MAP bizim üçün arrayı gəzib elementlərin List(Siyahı) sayını tapır
//ikinci "product" bir takma ad.
// => fat arry


//Bir sətirlik kodlar üçün belə yazmaq olar
console.log("<ul>")
products.map(product=>console.log(`<li>${product.name}</li>`))
console.log("</ul>")

//Çox sətirli kodlar üçün püsküllü mörtərizədən istifadə etmək lazımdır.

products.map(product=>{
    console.log(product)
    console.log(`<li>${product.name}</li>`)
})


// Filter - Bizim üçün bir array(massiv) əmələ gətirir.
// Bunun səbəbi render ederkən səhifədə dəyərlərin yenilənməsidir.
// Əgər dəyər referans tipdə olarsa onun referansı yenilənməlidir.

let filteredProducts = products.filter(product => product.unitPrice>3000)
console.log(filteredProducts)

//Reduce nisbətən az istifadə olunan bir əməliyyatdır.
//Məsələn bir Account(Hesab Toplam) işini görür.
//Hər bir product üçün acc-yə dəyəri əlavə et
//0 da başlanğıc dəyəridir.

let cartTotal = products.reduce((acc, product)=>acc + product.unitPrice, 0)
console.log(cartTotal)

let cartTotal2 = products
                .filter(p=>p.unitPrice>3000)
                .map(p=>{
                    //Map ilə ədv hesablayır 18%
                    p.unitPrice = p.unitPrice*1.18
                    return p
                })
                .reduce((acc,p)=> acc+p.unitPrice, 0)

console.log(cartTotal2)                