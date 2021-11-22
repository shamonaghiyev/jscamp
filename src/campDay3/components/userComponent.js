import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js"


let logger1 = new ElasticLogger();
let userService = new UserService(logger1);

let user1 = new User(1,"Lenovo","Legion","Tovuz");
let user2 = new User(2,"Apple","MacBook","Baku");

userService.add(user1);
userService.add(user2);
user2.age = 19;
console.log(userService.list());
console.log(userService.getById(2));

let customer = { id: 1, firstName: "Shamo" };
//Prototyping
customer.lastName = "Naghiyev";

console.log(customer.lastName);

console.log(".................");
userService.load();
console.log(userService.customers);
console.log(userService.employees);
console.log(userService.errors)
