
var Point = function(x) {
    this.x = x;
};
var p1 = new Point(3);
p1.constructor === Point; // => true
p1.constructor = 5;
Point.prototype.z = 3;
p1.z === 3 // => true

var BankAccount = function(b) {
    var this.balance = b;
    };

BankAccount.prototype.showBalance = function() {
    return this.balance;
};

 
BankAccount.prototype.deposit = function(v) {
    this.balance = this.balance+v;
};

BankAccount.prototype.withdraw = function(v) {
    if (this.balance < v) {
        throw new Error("insufficient balance");
    }
    else {
        this.balance = this.balance+v;
    };
};

var a1 = new BankAccount(100);

a1.showBalance() === 100; // => true
a1.deposit(400);
a1.withdraw(200);
a1.showBalance === 300; // => true

a1.balance = -1000 ; // breaks invariant that balance should be non-negative!

var SafeBankAccount = function(b) {

    var balance = b;
    var a = new Object();

    var showBalance = function() {
        return balance;
    };

    var deposit = function(v) {
        balance = balance+v;
    };

    var withdraw = function(v) {
        if (balance < v) {
        throw new Error("insufficient balance");
        }
        else {
            balance = balance+v;
        };
    };

    // install methods
    a.showBalance = showBalance
    a.deposit = deposit;
    a.withdraw = withdraw;
    return a;
};

var a2 = SafeBankAccount(100);

a2.showBalance() === 100; // => true
a2.deposit(400);
a2.withdraw(200);
a2.showBalance() === 300; // => true
a2.balance === undefined; // => true

var getBalance = function() {
    return balance;
};

a2.getBalance = getBalance;
try {
   a2.getBalance();   // throws  "ReferenceError: balance is not defined"
}
catch (e) {
 "undefined";
};  // => undefined

var PersonalAccount = function(name, balance) {
    var personName = name;
    var a = SafeBankAccount(balance);
    var b = Object.beget(a);

    var withdraw = function(v) {
        if (v < 10) {
            console.log("withdrawal amount needs to be at least 10");
        }
        else {
            a.withdraw(v);
        }
    };
    var showName = function() {
        return personName;
    };
    
    var show = function() {
        console.log(showName() + "  has balance " + a.showBalance());
    };

    b.withdraw = withdraw;
    b.showName = showName;
    b.show = show;
    return b;
};

var a3 = PersonalAccount("Anil", 500);
a3.show(); // => Anil has balance 500
a3.withdraw(100);  
a3.showBalance(); // => 400
a3.withdraw(1);  // withdrawal amount needs to be at least 10
