import User from "./user";

export default class Customer extends User{
    constructor(id, firstName, lastName, city, age, creditCardNumber) {
        //super this. etməkdən bizi xilas edər. Useri çalışdırar.
        super(id, firstName, lastName, city, age);
        this.creditCardNumber = creditCardNumber;
    }

}