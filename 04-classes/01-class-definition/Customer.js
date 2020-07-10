var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
// let create instance
var myCustomer = new Customer("Martin", "Dixion");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
