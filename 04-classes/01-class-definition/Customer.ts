class Customer{

    firstName: string;
    lastName: string;


    constructor(theFirst : string, theLast : string){
        this.firstName = theFirst;
        this.lastName = theLast;

    }

}
// let create instance

let myCustomer = new Customer("Martin", "Dixion");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);