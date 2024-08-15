Object.prototype.foo = function() {
		        this.x = 5;
};

a = {x: 1};
a.foo();

// the prototype field may be set, but field lookup follows
// an internal values of the constructor and prototype fields.

// Therefore, there is no use setting the prototype and
// constructor fields.


Object.beget = function(o) {
    var F = function() {};
    F.prototype = o;
    var b =  new F();
    return b;
};


a = {x:1, y:2};

// b = a.beget();