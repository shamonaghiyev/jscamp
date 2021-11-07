
//export 
class Customer{
    constructor(id, customerNumber){
        this.id = id;
        this.customerNumber = customerNumber;

    }
}

let customer = new Customer(1,"777");
//prototyping
customer.name = "Lenovo Legion"
console.log(customer.name)

// Classa prototyping
Customer.birshey = "BirShey"
console.log(Customer.birshey)

console.log(customer.customerNumber)

class IndividualCustomer extends Customer{
    constructor(firstName, id, customerNumber){
        super(id,customerNumber) //extende yollanilan
        this.firstName = firstName;
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName, id, customerNumber){
        //Base yani Customere yollanilacaqlar super ile
        super(id,customerNumber) //extende yollanilan
        this.companyName = companyName;
    }
}



//03.10.09