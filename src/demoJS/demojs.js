
let hello = "Hello"
console.log(hello)


// Bu tip new etmək çox da yaxşı deyil.
// Ədəd olduqda qarışıq olur Array(22) 22 elementdir yoxsa ədəd.
// var students  = new Array("Lenovo","Apple","ASUS")
var students2 = ["Lenovo","Apple","ASUS","MSI"]
// var istifadesi elede yaxshi deyil.
console.log(students2)
console.log(students2[1])
// .push() add element Array
students2.push(2022)
console.log(students2)
students2[students2.length] = "AZN"
console.log(students2)


//Object Typing
let objStudent = {firstName: "Shamo", lastName: "Naghiyev", city: "Baku"};
objStudent.city = "Tovuz";
console.log(objStudent);

//Loose Typing
let number = 9;
// Object vermek olar
// number = new Object();
number = "Error";
alert(number);

//Dynamic Typing

let customer = {
    id: 1,
    contactName: "samonagyev"
}

customer.country = "Azerbaijan";

customer.sayHello = function () {
 alert("Hello, " + this.contactName);   
}

customer.sayHello();

function eventCode() {
    alert("Event Code Run.");
}

eventCode();


//Function Signature
function functionName(parameter1, parameter2) {
    //Do something
    return parameter1*parameter2;
}

console.log(functionName(5,6));

//Function without return statement
function functionWithOutReturn (parameter1, parameter2) {
    console.log("This is a function wihtout 'return' statement");
}

console.log(functionWithOutReturn());

//Parametr Defaults
function functionName2(x, y) {
    if(y == undefined){
        y = 0
    }
}

// The Arguments Object
console.log(findMax(2, 4, 68, 1, 99) );

function findMax() {
    let i, max1 = 0;
    for(i = 0; i < arguments.length; i++){
        if(arguments[i] > max1) {
            max1 = arguments[i];
        }
    }
    return max1;
}
